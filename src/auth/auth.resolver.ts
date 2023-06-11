import { Resolver, Mutation, Query, Args, Context, GraphQLExecutionContext, CONTEXT } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthType, CreateAuthInput, InputAuthInput} from './dto/create-auth.input';
import { Auth } from '../../db/entities/auth.entity'
import { UpdateAuthInput } from './dto/update-auth.input';
import { getUser } from 'src/decorator';
import { Response } from 'express';

@Resolver((of)=>[Auth]!)
export class AuthResolver {

    constructor(private Authservice : AuthService){}

    @Mutation( (of)=> [Auth]!)
    async createAuth(@Args('input') input : CreateAuthInput) {

      const createdAuth : Auth = await this.Authservice.create(input)

      return [createdAuth]
  

    }

    @Mutation( ()=> [Auth]!)
    async login(
      @Context('res') res : Response,
      @Args('login') input : InputAuthInput,
    ){

      const resp =  await this.Authservice.login(input)

      const token = await this.Authservice.jwtToken(resp)

      res.cookie("access_token",token, {httpOnly : true});   

      return [resp]


    }

}