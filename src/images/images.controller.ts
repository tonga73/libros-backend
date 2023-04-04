import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Res,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from './images.service';

import { Image as ImageModel, Prisma } from '@prisma/client';

import { SharpPipe } from 'src/pipes/sharp.pipe';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // CREAR IMAGEN
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  handleUpload(@UploadedFile(SharpPipe) image: string) {
    const url = `/images/${image}`;

    return this.imagesService.create({
      filename: image,
      url,
    });
  }

  // OBTENER TODAS LAS IMAGENES
  @Get()
  findAll(): Promise<ImageModel[]> {
    return this.imagesService.findAll({
      include: {
        user: true,
      },
    });
  }

  // OBTENER IMAGEN POR NOMBRE DE ARCHIVO
  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne({ id: Number(id) });
  }

  // VER IMAGINE
  @Get(':filename')
  seeUploadedFile(@Param('filename') image, @Res() res) {
    return res.sendFile(image, { root: './uploads/images' });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove({ id: Number(id) });
  }
}
