import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './../auth/auth.service';
import { Request, request} from 'express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { getUser } from 'src/decorator';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(

    private jwtService: JwtService,

    private authService : AuthService,

     private config : ConfigService,

     ) {}

  async canActivate(context: ExecutionContext){

    const ctx = GqlExecutionContext.create(context)

    const { req } = ctx.getContext();
    
    const token = await this.extractTokenFromHeader(req);
      
    return true
    
  }
  
  
  async extractTokenFromHeader(request){
    
    const authorization = request.headers['authorization'];

  if (!authorization || Array.isArray(authorization)) {
    
    throw new Error('Invalid Authorization Header');
    
  }
  
  const [ type, token] = authorization.split(' ');

  await this.tokenVerify(token)

}

async tokenVerify(token){
    
  if (!token) {
      
    throw new UnauthorizedException();
    
  }
  
  try {
    
    const payload = await this.jwtService.verifyAsync(
      
      token,
      
      {
        
        secret:  this.config.get('jwt_secret') || "&&*(()%$#@*^$#@%&&)"
        
      }

    ); 

      request['user']  = payload
 
      return request['user']
      
    } catch {
    
    throw new UnauthorizedException();
    
  }
}

}