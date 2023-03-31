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
    include?: Prisma.ImageInclude;
  }): Promise<Image[]> {
    const { skip, take, cursor, where, orderBy, include } = params;

    return this.prisma.image.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(
    imageWhereUniqueInput: Prisma.ImageWhereUniqueInput,
  ): Promise<Image | null> {
    return this.prisma.image.findUnique({
      where: imageWhereUniqueInput,
      include: {
        bookCover: true,
        bookImage: true,
      },
    });
  }

  async update(
    id: number,
    updateImageDto: { bookCoverId?: number; bookImageId?: number },
  ): Promise<Image> {
    return this.prisma.image.update({
      data: updateImageDto,
      where: { id },
    });
  }

  async remove(where: Prisma.ImageWhereUniqueInput): Promise<Image> {
    return this.prisma.image.delete({
      where,
    });
  }
}
