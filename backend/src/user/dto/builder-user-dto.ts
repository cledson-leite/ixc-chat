import { User } from '../entities/user.entity';

export class BuilderUserDto {
  private readonly user = new User();

  addId(value: string): this {
    this.user.setId(value);
    return this;
  }

  addName(value: string): this {
    this.user.setName(value);
    return this;
  }

  addUsername(value: string): this {
    this.user.setUsername(value);
    return this;
  }

  addPassword(value: string): this {
    this.user.setPassword(value);
    return this;
  }

  build(): User {
    return this.user;
  }
}
