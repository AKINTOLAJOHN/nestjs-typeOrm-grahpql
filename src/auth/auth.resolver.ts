import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateAuthInput, InputAuthInput} from './dto/create-auth.input';
import { Auth } from '../../db/entities/auth.entity'
import { UpdateAuthInput } from './dto/update-auth.input';

@Resolver((of)=>[Auth]!)
export class AuthResolver {

    constructor(private Authservice : AuthService){}

    @Mutation( (of)=> [Auth]!)
    async createAuth(@Args('input') input : CreateAuthInput) : Promise<Auth>{

      const createdAuth : Auth = await this.Authservice.create(input)

      return createdAuth
  

    }

    @Mutation( (of)=> [Auth]!)
    async login(@Args('input') input : InputAuthInput){

      const creatAuth = await  this.Authservice.login(input)

      return  creatAuth 
      

    }

    @Mutation((of)=>[Auth]!)
    async passwordReset(@Args('input') input : UpdateAuthInput){

      return this.Authservice.passwordReset(input)

    }




    @Query(()=>[Auth], {name : "AuthUser"})
    FindOne(@Args('input') email : string ){

        return this.Authservice.findOne(email)

    }

}