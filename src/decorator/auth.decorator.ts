import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const getUser = createParamDecorator(

  (data: string, ctx: ExecutionContext) => {

    const  re  = GqlExecutionContext.create(ctx)

    const { req } = re.getContext();

    const user = req.user;

    return data ? user?.[data] : user;

  },
  
);