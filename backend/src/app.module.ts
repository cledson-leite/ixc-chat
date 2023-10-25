import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { PrismaModule } from './prisma/prisma.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    MessageModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  providers: [ChatGateway],
})
export class AppModule {}
