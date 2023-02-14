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
  @UseInterceptors(
    FileInterceptor("image"),
  )
  handleUpload(
    @UploadedFile(SharpPipe) image: string,
  ) {
    return this.imagesService.create({filename: image, url: `/images/${image}`, type: image.split(/[-.]/)[2]});
  }

  // OBTENER TODAS LAS IMAGENES
  @Get()
  findAll(): Promise<ImageModel[]> {
    return this.imagesService.findAll({});
  }

  // OBTENER IMAGEN POR NOMBRE DE ARCHIVO
  @Get(':filename')
  seeUploadedFile(@Param('filename') image, @Res() res) {
    return res.sendFile(image, { root: './uploads/images' });
  }

  // EDITAR IMAGEN POR ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImageDto: { bookCoverId?: number; bookImageId?: number },
  ) {
    return this.imagesService.update(+id, updateImageDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove({ id: Number(id) });
  }
}
