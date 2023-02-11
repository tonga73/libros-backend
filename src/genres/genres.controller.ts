import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';

import { Genre as GenreModel } from '@prisma/client';

import { UpdateGenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // CREAR GENERO
  @Post()
  create(@Body() createGenreDto: { name: string; ageRange?: string }) {
    return this.genresService.create(createGenreDto);
  }

  // OBTENER TODOS LOS GENEROS
  @Get()
  async findAll(): Promise<GenreModel[]> {
    return this.genresService.findAll({});
  }


  // OBTENER LIBRO POR ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genresService.findOne({ id: Number(id) });
  }

  // EDITAR LIBRO POR ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genresService.remove({ id: Number(id) });
  }
}
