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

import { Image as ImageDto } from 'src/images/dto/image.dto';
import { Book as BookDto } from 'src/books/dto/book.dto';
import { Text as TextDto } from 'src/texts/dto/text.dto';

export class Chapter {
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

  @ApiProperty({
    example: [
      {
        id: 1,
        content:
          'Fabián Figueredo lleva el número de la bestia. El 666. Nació el seis de junio a las seis de la mañana.',
      },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => TextDto)
  text: TextDto[];

  @ApiProperty({ example: [{ id: 1, url: 'http://example.com/image.jpg' }] })
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];

  @ApiProperty({ example: { id: 1, name: 'El Señor de los Anillos' } })
  @ValidateNested()
  @Type(() => BookDto)
  book: BookDto;
}
