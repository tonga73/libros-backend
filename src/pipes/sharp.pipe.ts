import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import path from 'path';
import sharp from 'sharp';

@Injectable()
export class SharpPipe implements PipeTransform<Express.Multer.File, Promise<string>> {

  async transform(image: Express.Multer.File): Promise<string> {
    const originalName = path.parse(image.originalname).name;
    const filename = Date.now() + '-' + originalName + '.webp';


    await sharp(image.buffer)
      .resize(800)
      .webp({ effort: 3 })
      .toFile(path.join('uploads/images', filename));

    return filename;
  }

}
