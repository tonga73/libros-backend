import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';
import { MulterModule } from '@nestjs/platform-express';
import { ImagesController } from './images/images.controller';
import { ImagesModule } from './images/images.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { ChaptersService } from './chapters/chapters.service';
import { ChaptersController } from './chapters/chapters.controller';
import { ChaptersModule } from './chapters/chapters.module';
import { TextsModule } from './texts/texts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    ImagesModule,
    BooksModule,
    GenresModule,
    ChaptersModule,
    TextsModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    ImagesController,
    BooksController,
    ChaptersController,
  ],
  providers: [
    AppService,
    PrismaService,
    UsersService,
    BooksService,
    ChaptersService,
  ],
})
export class AppModule {}
