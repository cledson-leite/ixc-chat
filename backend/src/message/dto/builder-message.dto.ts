import { Message } from '../entities/message.entity';

export class BuilderMessageDto {
  private readonly message = new Message();

  addId(value: string): this {
    this.message.setId(value);
    return this;
  }

  addAuthor(value: string): this {
    this.message.setAuthor(value);
    return this;
  }

  addText(value: string): this {
    this.message.setText(value);
    return this;
  }

  build(): Message {
    return this.message;
  }
}
