import {
  IsInt,
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { User } from 'src/users/entities/user.entity';
import { Book as BookDto } from 'src/books/dto/book.dto';
import { Chapter as ChapterDto } from 'src/chapters/dto/chapter.dto';

export class CreateImageDto {
  @ApiProperty({ example: 'image_field' })
  @IsString()
  fieldname: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  originalname: string;

  @ApiProperty({ example: '7bit' })
  @IsString()
  encoding: string;

  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  mimetype: string;

  @ApiProperty({ example: 'uploads/' })
  @IsString()
  destination: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  filename: string;

  @ApiProperty({ example: '/app/uploads/image.jpg' })
  @IsString()
  path: string;

  @ApiProperty({ example: 1024 })
  @IsInt()
  size: number;

  @ApiProperty({ example: 'portada' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({
    example: { id: 1, email: 'user@example.com', name: 'John Smith' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user: User;

  @ApiProperty({ example: { id: 1, name: 'El Señor de los Anillos' } })
  @ValidateNested()
  @Type(() => BookDto)
  @IsOptional()
  book: BookDto;

  @ApiProperty({ example: { id: 1, title: 'Capítulo 1' } })
  @ValidateNested()
  @Type(() => ChapterDto)
  @IsOptional()
  chapter: ChapterDto;
}

export class UpdateImageDto {
  @ApiProperty({ example: 'image_field' })
  @IsString()
  @IsOptional()
  fieldname: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  @IsOptional()
  originalname: string;

  @ApiProperty({ example: '7bit' })
  @IsString()
  @IsOptional()
  encoding: string;

  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  @IsOptional()
  mimetype: string;

  @ApiProperty({ example: 'uploads/' })
  @IsString()
  @IsOptional()
  destination: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  @IsOptional()
  filename: string;

  @ApiProperty({ example: '/app/uploads/image.jpg' })
  @IsString()
  path: string;

  @ApiProperty({ example: 1024 })
  @IsInt()
  size: number;

  @ApiProperty({ example: 'portada' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({
    example: { id: 1, email: 'user@example.com', name: 'John Smith' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user: User;

  @ApiProperty({ example: { id: 1, name: 'El Señor de los Anillos' } })
  @ValidateNested()
  @Type(() => BookDto)
  @IsOptional()
  book: BookDto;

  @ApiProperty({ example: { id: 1, title: 'Capítulo 1' } })
  @ValidateNested()
  @Type(() => ChapterDto)
  @IsOptional()
  chapter: ChapterDto;
}

export class Image {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'image_field' })
  @IsString()
  fieldname: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  originalname: string;

  @ApiProperty({ example: '7bit' })
  @IsString()
  encoding: string;

  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  mimetype: string;

  @ApiProperty({ example: 'uploads/' })
  @IsString()
  destination: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  filename: string;

  @ApiProperty({ example: '/app/uploads/image.jpg' })
  @IsString()
  path: string;

  @ApiProperty({ example: 1024 })
  @IsInt()
  size: number;

  @ApiProperty({ example: 'portada' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty({
    example: { id: 1, email: 'user@example.com', name: 'John Smith' },
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user: User;

  @ApiProperty({ example: { id: 1, name: 'El Señor de los Anillos' } })
  @ValidateNested()
  @Type(() => BookDto)
  @IsOptional()
  book: BookDto;

  @ApiProperty({ example: { id: 1, title: 'Capítulo 1' } })
  @ValidateNested()
  @Type(() => ChapterDto)
  @IsOptional()
  chapter: ChapterDto;

  @ApiProperty({ example: '2022-12-16T00:00:00.000Z' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: '2022-12-16T00:00:00.000Z' })
  @IsDate()
  updatedAt: Date;
}
