import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';

import { BooksModule } from './books/books.module';
import { MulterModule } from '@nestjs/platform-express';
import { ImagesController } from './images/images.controller';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [BooksModule, MulterModule.register({ dest: './uploads' }), ImagesModule],
  controllers: [AppController, ImagesController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
