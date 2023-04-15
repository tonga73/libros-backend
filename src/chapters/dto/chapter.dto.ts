import {
  IsInt,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { Book } from '@prisma/client';

import { Image as ImageDto } from 'src/images/dto/image.dto';
import { Book as BookDto } from 'src/books/dto/book.dto';
import { Text as TextDto } from 'src/texts/dto/text.dto';

export class CreateChapterDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'El Origen' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'El Origen' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ example: 3 })
  @IsInt()
  @IsOptional()
  order: number;
}
