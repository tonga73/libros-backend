import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // // Función de validación de contraseñas
  // validatePassword(password: string): boolean {
  //   // Verifica si la contraseña tiene al menos 8 caracteres y contiene al menos una letra mayúscula, una letra minúscula y un número
  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   return passwordRegex.test(password);
  // }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // // Valida la contraseña del usuario
    // if (!this.validatePassword(createUserDto.password)) {
    //   throw new BadRequestException(
    //     'La contraseña no cumple con los requisitos de seguridad',
    //   );
    // }

    // Encripta la contraseña del usuario
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Crea el usuario utilizando la contraseña encriptada
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return user;
  }

  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id: Number(id) });
  }
}
