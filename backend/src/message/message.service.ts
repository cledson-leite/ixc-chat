import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { PrismaService } from '../prisma/prisma.service';
import { BuilderMessageDto } from './dto/builder-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}
  async save(message: Message): Promise<Message> {
    const result = await this.prisma.messages.create({
      data: {
        author: message.getAuthor(),
        text: message.getText(),
      },
    });
    return new BuilderMessageDto()
      .addId(result.id)
      .addAuthor(result.author)
      .addText(result.text)
      .build();
  }
  async getAll(): Promise<Message[]> {
    const result = await this.prisma.messages.findMany();
    const messages = result.map((message) =>
      new BuilderMessageDto()
        .addId(message.id)
        .addAuthor(message.author)
        .addText(message.text)
        .build(),
    );
    return messages;
  }
  async remove(id: string): Promise<void> {
    await this.prisma.messages.delete({ where: { id } });
  }
}
