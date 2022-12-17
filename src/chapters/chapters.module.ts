import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersService, PrismaService],
  exports: [ChaptersService],
})
export class ChaptersModule {}
