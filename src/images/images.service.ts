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
}
