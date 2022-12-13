import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Res,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get(':filename')
  seeUploadedFile(@Param('filename') image, @Res() res) {
    return res.sendFile(image, { root: './uploads/images' });
  }

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
}
