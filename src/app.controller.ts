import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { USER_ACCOUNT } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(USER_ACCOUNT.GET_USER_ACCOUNT)
  getUserAccount(): Promise<any> {
    return this.appService.getUserAccount();
  }

  @MessagePattern(USER_ACCOUNT.CREATE_USER_ACCOUNT)
  createUserAccount(@Payload() data: any): Promise<any> {
    return this.appService.createUserAccount(data);
  }
}
