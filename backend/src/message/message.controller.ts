import { Controller, Get } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}
  @Get()
  async getAllMessage(): Promise<Message[]> {
    return await this.service.getAll();
  }
}
