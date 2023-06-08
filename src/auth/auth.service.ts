import { Injectable, HttpException,HttpStatus, ForbiddenException} from '@nestjs/common';
import { CreateAuthInput, InputAuthInput } from './dto/create-auth.input';
import { InjectRepository,  } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auth } from '../../db/entities/auth.entity';
import { hashSync, compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import  { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth) private  AuthREposity : Repository<Auth>,
        private jwt : JwtService,
        private config : ConfigService

        ){}

    async create(createAuthInput:CreateAuthInput){

        
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

            const app = await this.AuthREposity.save(user)
    
    
            return user


        }

        
    }

    async login(AuthInDto : InputAuthInput){

        const { pword, email } = AuthInDto;

        const  verify = await this.AuthREposity.findOne({where : {email}})

        if(!verify){

            throw new ForbiddenException(

                'Credentials incorrect',
            )

        }

        const pwMatches = await compareSync(

            verify.pword, pword,

        )

        if (!pwMatches){
            
            throw new ForbiddenException(

                'Credentials incorrect',

            )

        }

        return this.signtoken(verify.email, verify.id)

    }

    async findOne(email : string) {

        const user = this.AuthREposity.findOne({where :{email : email}})

        return user
        

      }

      async signtoken(email : string, userId : number){

        const secret = this.config.get('jwt_secret')


        const info = { 

            email,

            userId

        };

        const access_token  = await this.jwt.signAsync(info, {

            secret,

            expiresIn : Date.now() + 1 * 24 * 60 * 1000

        })      

        return { access_token : access_token }

        
    }



}
