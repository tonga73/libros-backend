import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { Role } from '@prisma/client';

import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getBooks() {
    return 'MAIN PAGE';
  }

  @Get('/users_enumdata')
  getRoles(): object {
    return {
      enums: {
        roles: Role,
      },
    };
  }
}
