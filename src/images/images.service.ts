import { Injectable } from '@nestjs/common';

import { Image, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ImageCreateInput): Promise<Image> {
    return this.prisma.image.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ImageWhereUniqueInput;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput;
  }): Promise<Image[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.image.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
