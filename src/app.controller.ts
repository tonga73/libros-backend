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
import { UserService } from './user.service';

import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
