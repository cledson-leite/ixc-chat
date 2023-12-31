import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../message/message.service';
import { BuilderMessageDto } from '../message/dto/builder-message.dto';
@WebSocketGateway({ cors: true })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly service: MessageService) {}
  @WebSocketServer() server: Server;
  private readonly log: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): void {
    const msg = new BuilderMessageDto()
      .addAuthor(payload.author)
      .addText(payload.text)
      .build();
    this.service.save(msg);
    this.server.emit('msgToClient', payload);
  }

  @SubscribeMessage('status')
  handleStatus(client: Socket, payload: boolean): void {
    this.server.emit('status', payload, client.id);
  }

  afterInit(server: Server): void {
    server;
    this.log.log('Init server socket');
  }
  handleConnection(client: Socket): void {
    this.server.emit('status', true);
    this.log.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket): void {
    this.server.emit('status', false);
    this.log.log(`Client disconnected: ${client.id}`);
  }
}
