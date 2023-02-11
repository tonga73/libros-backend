import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Genre, Prisma } from '@prisma/client';

import { UpdateGenreDto } from './dto/genre.dto';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GenreCreateInput): Promise<Genre> {
    return this.prisma.genre.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GenreWhereUniqueInput;
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithRelationInput;
  }): Promise<Genre[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.genre.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }


  async updateGenre(params: {
    where: Prisma.GenreWhereUniqueInput;
    data: Prisma.GenreUpdateInput;
  }): Promise<Genre> {
    const { where, data } = params;
    return this.prisma.genre.update({
      data,
      where,
    });
  }

  async deleteGenre(where: Prisma.GenreWhereUniqueInput): Promise<Genre> {
    return this.prisma.genre.delete({
      where,
    });
  }

  async findOne(
    genreWhereUniqueInput: Prisma.GenreWhereUniqueInput,
  ): Promise<Genre | null> {
    return this.prisma.genre.findUnique({
      where: genreWhereUniqueInput,
    });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    return this.prisma.genre.update({
      data: updateGenreDto,
      where: { id },
    });
  }

  async remove(where: Prisma.GenreWhereUniqueInput): Promise<Genre> {
    return this.prisma.genre.delete({
      where,
    });
  }
}
