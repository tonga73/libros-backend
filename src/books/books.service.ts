import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Book, Prisma } from '@prisma/client';
import { UpdateBookDto } from './dto/book.dto';

export type BookSelect = {
  id: boolean;
  name: boolean;
  description: boolean;
  type: boolean;
  cover: {
    select: {
      url: boolean;
    };
  };
  secondaryImage: {
    select: {
      url: true;
    };
  };
  publicationDate: boolean;
  published: boolean;
  genreId: boolean;
  illustratorId: boolean;
  publisherId: boolean;
};

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookWhereUniqueInput;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput;
    select?: BookSelect;
  }): Promise<Book[]> {
    const { skip, take, cursor, where, orderBy, select } = params;
    return this.prisma.book.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select,
    });
  }

  async findOne(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
      include: {
        cover: {
          select: {
            url: true,
          },
        },
        genre: {
          select: {
            name: true,
            ageRange: true,
          },
        },
        illustrator: {
          select: {
            name: true,
            type: true,
          },
        },
        publisher: {
          select: {
            name: true,
            type: true,
          },
        },
      },
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.prisma.book.update({
      data: updateBookDto,
      where: { id },
    });
  }

  async remove(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.delete({
      where,
    });
  }
}
