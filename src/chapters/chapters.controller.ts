import { Body, Get, Post, Controller } from '@nestjs/common';
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
}
