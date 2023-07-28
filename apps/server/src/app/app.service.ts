import { Injectable } from '@nestjs/common';
import { Message } from '@lib/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Hello API' };
  }
}
