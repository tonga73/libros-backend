import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Book } from '@prisma/client';

export class UpdateGenreDto {
  @ApiProperty({ example: 'Fantastico y Misterio' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: '+12' })
  @IsString()
  @IsOptional()
  ageRange: string
}

export class Genre {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly id: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly ageRange?: string;

  @ApiProperty({ required: false, type: 'Book', isArray: true })
  @IsOptional()
  readonly books?: Book[];
}
