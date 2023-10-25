import { IsString, IsStrongPassword, MaxLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @MaxLength(100)
  name: string;
  @IsString()
  @MaxLength(100)
  username: string;
  @IsStrongPassword({
    minLength: 6,
  })
  password: string;
}
