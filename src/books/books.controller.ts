import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { BooksService } from './books.service';

import { Book as BookModel } from '@prisma/client';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // CREAR LIBRO
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  //   OBTENER TODOS LOS LIBROS
  @Get()
  async getBooks(): Promise<BookModel[]> {
    return this.booksService.findAll({
      select: {
        id: true,
        name: true,
        description: true,
        type: true,
        cover: true,
        secondaryImage: true,
        publicationDate: false,
        published: false,
        genreId: false,
        illustratorId: false,
        publisherId: false,
      },
    });
  }

  // OBTENER LIBRO POR ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne({ id: Number(id) });
  }

  // EDITAR LIBRO POR ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove({ id: Number(id) });
  }
}
