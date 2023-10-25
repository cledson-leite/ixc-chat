import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login-dto';
import { SignupDto } from './dto/signup-dto';
import { BuilderUserDto } from './dto/builder-user-dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() params: SignupDto) {
    const dto = new BuilderUserDto()
      .addName(params.name)
      .addUsername(params.username)
      .addPassword(params.password)
      .build();
    return this.userService.create(dto);
  }

  @Post('login')
  login(@Body() params: LoginDto) {
    const { username, password } = params;
    return this.userService.login(username, password);
  }
}
