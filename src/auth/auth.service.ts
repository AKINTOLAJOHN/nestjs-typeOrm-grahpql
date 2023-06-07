import { Injectable, } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auth } from '../../db/entities/auth.entity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Auth) private readonly AuthREposity : Repository<Auth>){}

    async create(createAuthInput:CreateAuthInput){

        let user = new Auth()
        
        user.lastname = createAuthInput.lastname
        user.email = createAuthInput.email
        user.pword = createAuthInput.password
        user.firstname = createAuthInput.firstname
        
        await this.AuthREposity.save(user)

        return user
        
    }

    async findAll(createAuthInput : CreateAuthInput) {
        return createAuthInput
      }

}
