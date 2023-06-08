import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateAuthInput, InputAuthInput} from './dto/create-auth.input';
import { Auth } from '../../db/entities/auth.entity'

@Resolver((of)=>[Auth]!)
export class AuthResolver {

    constructor(private Authservice : AuthService){}

    @Mutation( ()=> [Auth]!)
    async createAuth(@Args('input') input : CreateAuthInput){

      return this.Authservice.create(input)
  

    }

    @Mutation( ()=> [Auth]!)
    async login(@Args('input') input : InputAuthInput){

      return this.Authservice.login(input)
    }




    @Query(()=>[Auth], {name : "AuthUser"})
    FindOne(@Args('input') email : string ){

        return this.Authservice.findOne(email)

    }

}