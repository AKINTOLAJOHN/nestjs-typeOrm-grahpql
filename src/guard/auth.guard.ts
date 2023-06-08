import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './../auth/auth.service';
import { Request } from 'express';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(

      private jwtService: JwtService,

      private authService : AuthService,

       private config : ConfigService,

       ) {}
  
    async canActivate(context: ExecutionContext): Promise<any> {

      const request = context.switchToHttp().getRequest<Request>();

      const token = this.extractTokenFromHeader(request);

      try {
        
        const payload = await this.jwtService.verifyAsync(

          token,

          {
            
            secret:  this.config.get('jwt_secret')

          }
        );
        
        request['user'] = payload;

        
      } catch {
        
        throw new UnauthorizedException();
        
      }

    return true
    
  }
  

  private extractTokenFromHeader(request: Request): string | undefined {

    const authorization = request.cookies;

    if (!authorization || Array.isArray(authorization)) {

      throw new Error('Invalid Authorization Header');

    }

    const [type, token] = authorization.split(' ');

    return type === 'Bearer' ? token : undefined;

  }

}