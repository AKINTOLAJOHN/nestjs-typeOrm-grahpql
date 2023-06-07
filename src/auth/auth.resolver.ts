import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { Auth } from '../../db/entities/auth.entity'

@Resolver(Auth)
export class AuthResolver {

    constructor(private Authservice : AuthService){}

    @Mutation( ()=> [Auth]!)
    async createAuth(@Args('input') input : CreateAuthInput){

      return this.Authservice.create(input)
  

    }


    @Query(()=>[Auth], {name : "AuthUser"})
    FindAll(@Args('input') input : CreateAuthInput ){

        return this.Authservice.findAll(input)

    }

}