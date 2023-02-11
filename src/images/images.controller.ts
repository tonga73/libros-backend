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

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // CREAR IMAGEN
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'uploads/images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;

          callback(null, filename);
        },
      }),
    }),
  )
  handleUpload(
    @UploadedFile() file: Express.Multer.File,
    @Body() createImageDto: { type: string },
  ) {
    return this.imagesService.create({ ...file, ...createImageDto });
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
