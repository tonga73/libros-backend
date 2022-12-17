import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Text, Prisma } from '@prisma/client';

@Injectable()
export class TextsService {
  constructor(private prisma: PrismaService) {}

  async text(
    textWhereUniqueInput: Prisma.TextWhereUniqueInput,
  ): Promise<Text | null> {
    return this.prisma.text.findUnique({
      where: textWhereUniqueInput,
    });
  }

  async texts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TextWhereUniqueInput;
    where?: Prisma.TextWhereInput;
    orderBy?: Prisma.TextOrderByWithRelationInput;
  }): Promise<Text[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.text.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createText(data: Prisma.TextCreateInput): Promise<Text> {
    return this.prisma.text.create({
      data,
    });
  }

  async updateText(params: {
    where: Prisma.TextWhereUniqueInput;
    data: Prisma.TextUpdateInput;
  }): Promise<Text> {
    const { where, data } = params;
    return this.prisma.text.update({
      data,
      where,
    });
  }

  async deleteText(where: Prisma.TextWhereUniqueInput): Promise<Text> {
    return this.prisma.text.delete({
      where,
    });
  }
}
