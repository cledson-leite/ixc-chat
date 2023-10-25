import { IsString, IsStrongPassword, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MaxLength(100)
  username: string;

  @IsStrongPassword({
    minLength: 6,
  })
  password: string;
}
