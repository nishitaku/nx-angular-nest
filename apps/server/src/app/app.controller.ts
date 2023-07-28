import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

import { Message } from '@nx-angular-nest/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Message {
    return this.appService.getData();
  }
}
