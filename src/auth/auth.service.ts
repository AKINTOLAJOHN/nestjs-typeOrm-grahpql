import { Injectable, HttpException,HttpStatus, ForbiddenException} from '@nestjs/common';
import { CreateAuthInput, InputAuthInput } from './dto/create-auth.input';
import { InjectRepository,  } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auth } from '../../db/entities/auth.entity';
import { hashSync, compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import  { JwtService } from '@nestjs/jwt'
import { UpdateAuthInput } from './dto/update-auth.input';
import dataSource from 'db/data-source';

@Injectable()
export class AuthService {
    constructor(

        @InjectRepository(Auth) private  AuthREposity : Repository<Auth>,

        private readonly jwt : JwtService,
        
        private readonly config : ConfigService

        ){}

    async create(createAuthInput:CreateAuthInput) {
     
        const  verify = await this.AuthREposity.findOne({where : {email : createAuthInput.email}})
        
        if (verify){
            
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
            
        }else{

            const {email,pword,firstname,lastname} = createAuthInput

            let hashespassword = hashSync(pword,10)
            
            let user = new Auth()

            user.email = email,
            user.pword = hashespassword
            user.lastname = lastname
            user.firstname = firstname
            

            const data = await this.AuthREposity.save(user)

            return data



        }

        
    }

    async login(email : string, pword : string) : Promise<any>{

        const  user = await this.AuthREposity.findOne({where : {email}})

        if(!user){

            throw new ForbiddenException(

                'Credentials incorrect',
            )

        }

        
        const pwMatches = await compareSync(
            
         pword, user.pword
            
            )

        if (!pwMatches){
            
            throw new ForbiddenException(

                'Credentials incorrect',

            )

        }
        
        return this.jwtToken(user)
        
        
    }
    


    async jwtToken(user: Auth): Promise<any> {

        const secret =  this.config.get('jwt_secret') || "&&*(()%$#@*^$#@%&&)"

        console.log(secret)

        const payload = { username: user.email, sub: user.id };
    
        return this.jwt.signAsync(payload,{secret : secret , expiresIn : 858959});

      }




}
