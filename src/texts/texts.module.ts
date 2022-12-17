import { Module } from '@nestjs/common';
import { TextsService } from './texts.service';
import { TextsController } from './texts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TextsController],
  providers: [TextsService, PrismaService],
  exports: [TextsService],
})
export class TextsModule {}
