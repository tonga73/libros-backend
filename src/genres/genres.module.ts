import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  controllers: [GenresController],
  providers: [GenresService, PrismaService],
  exports: [GenresService],
})
export class GenresModule {}
