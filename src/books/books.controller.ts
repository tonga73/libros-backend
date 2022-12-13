import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { User as UserModel } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getBooks(): Promise<string> {
    return this.bookService.getBooks();
  }
}
