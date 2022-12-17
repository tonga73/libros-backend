import {
  IsInt,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDate,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { Role } from '@prisma/client';

import { Image as ImageDto } from 'src/images/dto/image.dto';
import { Book as BookDto } from 'src/books/dto/book.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'johnsmith' })
  @IsString()
  username: string;

  @ApiProperty({ example: '1234aBcD!' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'John Smith' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'Ilustrador' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ example: 'ADMIN' })
  @IsEnum(Role)
  role: Role;
}
