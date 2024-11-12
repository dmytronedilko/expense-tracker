import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsEmail()
  user_email: string;

  @ApiProperty()
  @IsStrongPassword()
  user_password: string;
}
