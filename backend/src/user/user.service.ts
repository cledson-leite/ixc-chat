import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';
import { BuilderUserDto } from './dto/builder-user-dto';

type UserProps = {
  username: string;
  accessToken: string;
};

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  private readonly createToken = (user: User) => {
    return this.jwtService.sign(
      {
        name: user.getName(),
        username: user.getUsername(),
      },
      {
        expiresIn: '7 days',
        subject: String(user.getId()),
      },
    );
  };
  async create(user: User): Promise<UserProps> {
    const ExistedUser = await this.prisma.users.findUnique({
      where: { username: user.getUsername() },
    });
    if (ExistedUser) throw new BadRequestException('Usuário já cadastrado');
    const salt = await genSalt();
    const hashedPass = await hash(user.getPassword(), salt);
    user.setPassword(hashedPass);
    try {
      const newUser = await this.prisma.users.create({
        data: {
          name: user.getName(),
          username: user.getUsername(),
          password: user.getPassword(),
        },
      });
      const dto = new BuilderUserDto()
        .addId(newUser.id)
        .addName(newUser.name)
        .addUsername(newUser.username)
        .addPassword(newUser.password)
        .build();
      return {
        username: dto.getUsername(),
        accessToken: this.createToken(dto),
      };
    } catch (error) {
      throw new BadRequestException('Usuário e/ou Senha invalidos');
    }
  }
  async login(username: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: { username },
    });
    if (!user) throw new UnauthorizedException('Usuário e/ou Senha invalidos');

    const isValid = await compare(password, user.password);
    if (!isValid)
      throw new UnauthorizedException('Usuário e/ou Senha invalidos');

    const dto = new BuilderUserDto()
      .addId(user.id)
      .addName(user.name)
      .addUsername(user.username)
      .addPassword(user.password)
      .build();
    return {
      username: dto.getUsername(),
      accessToken: this.createToken(dto),
    };
  }
}
