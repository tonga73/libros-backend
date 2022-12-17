import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
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

export class UpdateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsString()
  @IsOptional()
  email: string;

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
  @IsOptional()
  role: Role;
}
