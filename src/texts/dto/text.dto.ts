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

export class Text {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({
    example:
      'Fabián Figueredo lleva el número de la bestia. El 666. Nació el seis de junio a las seis de la mañana.',
  })
  @IsString()
  content: string;

  @ApiProperty({ example: 'El Origen' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'El Origen' })
  @IsString()
  @IsOptional()
  type: string;
}
