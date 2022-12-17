import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';

import { Genre as GenreModel } from '@prisma/client';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() createGenreDto: { name: string; ageRange?: string }) {
    return this.genresService.create(createGenreDto);
  }
}
