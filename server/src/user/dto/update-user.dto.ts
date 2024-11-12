import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: false })
  first_name?: string;

  @ApiProperty({ required: false })
  last_name?: string;

  @ApiProperty({ required: false })
  user_email?: string;

  @ApiProperty({ required: false })
  user_password?: string;
}
