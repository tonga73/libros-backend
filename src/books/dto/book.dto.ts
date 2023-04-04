import {
  IsString,
  IsOptional,
  IsInt,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { User } from 'src/users/entities/user.entity';
import { Image as ImageDto } from 'src/images/dto/image.dto';
import { Genre as GenreDto } from 'src/genres/dto/genre.dto';
import { Chapter as ChapterDto } from 'src/chapters/dto/chapter.dto';

export class CreateBookDto {
  @ApiProperty({ example: 'El Señor de los Anillos' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'La historia de un hobbit que debe destruir un anillo mágico',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ example: 'Fantasía épica' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ example: 'Fantasía épica' })
  @IsString()
  @IsOptional()
  cover: string;

  @ApiProperty({ example: 'Fantasía épica' })
  @IsString()
  @IsOptional()
  secondaryImage: string;

  @ApiProperty({ example: '01/01/1950' })
  @IsString()
  @IsOptional()
  publicationDate: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  published: boolean;

  @ApiProperty({ example: { id: 1, name: 'Fantasía' } })
  @ValidateNested()
  @Type(() => GenreDto)
  @IsOptional()
  genreId: GenreDto;

  // @ApiProperty({ example: [{ id: 1, url: 'http://example.com/image.jpg' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ImageDto)
  // images: ImageDto[];

  @ApiProperty({
    example: { id: 1, email: 'illustrator@example.com', name: 'John Smith' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  illustratorId: User;

  @ApiProperty({
    example: { id: 2, email: 'publisher@example.com', name: 'Jane Doe' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  publisherId: User;

  // @ApiProperty({ example: [{ id: 1, title: 'Capítulo 1' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ChapterDto)
  // chapters: ChapterDto[];
}

export class UpdateBookDto {
  @ApiProperty({ example: 'El Señor de los Anillos' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'La historia de un hobbit que debe destruir un anillo mágico',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ example: 'Fantasía épica' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ example: '01/01/1950' })
  @IsString()
  @IsOptional()
  publicationDate: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  published: boolean;

  // @ApiProperty({ example: { id: 1, name: 'Fantasía' } })
  // @ValidateNested()
  // @Type(() => GenreDto)
  // @IsOptional()
  // genreId: GenreDto;

  // @ApiProperty({ example: [{ id: 1, url: 'http://example.com/image.jpg' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ImageDto)
  // images: ImageDto[];

  // @ApiProperty({
  //   example: { id: 1, email: 'illustrator@example.com', name: 'John Smith' },
  // })
  // @ValidateNested()
  // @Type(() => User)
  // @IsOptional()
  // illustratorId: User;

  // @ApiProperty({
  //   example: { id: 2, email: 'publisher@example.com', name: 'Jane Doe' },
  // })
  // @ValidateNested()
  // @Type(() => User)
  // @IsOptional()
  // publisherId: User;

  // @ApiProperty({ example: [{ id: 1, title: 'Capítulo 1' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ChapterDto)
  // chapters: ChapterDto[];
}

export class Book {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'El Señor de los Anillos' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'La historia de un hobbit que debe destruir un anillo mágico',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ example: 'Fantasía épica' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({ example: '01/01/1950' })
  @IsString()
  @IsOptional()
  publicationDate: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  published: boolean;

  // @ApiProperty({ example: { id: 1, name: 'Fantasía' } })
  // @ValidateNested()
  // @Type(() => GenreDto)
  // @IsOptional()
  // genreId?: GenreDto;

  // @ApiProperty({ example: [{ id: 1, url: 'http://example.com/image.jpg' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ImageDto)
  // images: ImageDto[];

  @ApiProperty({
    example: { id: 1, email: 'illustrator@example.com', name: 'John Smith' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  illustratorId: User;

  @ApiProperty({
    example: { id: 2, email: 'publisher@example.com', name: 'Jane Doe' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  publisherId: User;

  // @ApiProperty({ example: [{ id: 1, title: 'Capítulo 1' }] })
  // @ValidateNested({ each: true })
  // @Type(() => ChapterDto)
  // chapters: ChapterDto[];
}
