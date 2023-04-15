import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ChaptersService } from './chapters.service';

import { Chapter as ChapterModel } from '@prisma/client';
import { CreateChapterDto } from './dto/chapter.dto';
@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post()
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chaptersService.create(createChapterDto);
  }

  // OBTENER TODOS LOS CAPITULOS
  @Get()
  findAll(): Promise<ChapterModel[]> {
    return this.chaptersService.findAll({});
  }

  // OBTENER CAPITULO POR ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaptersService.findOne({ id: Number(id) });
  }
}
