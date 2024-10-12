import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { WorkStatus } from '@employee-statuses/shared';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Put(':id')
  updateStatus(@Param('id') id: string, @Body('status') status: WorkStatus) {
    return this.usersService.updateStatus(id, status);
  }

  @Post()
  createNewUser(
    @Body() newUser: { name: string; status: WorkStatus; img: string },
  ) {
    return this.usersService.createNewUser(
      newUser.name,
      newUser.status,
      newUser.img,
    );
  }

  @Delete(':id')
  async softDeleteUser(@Param('id') id: string) {
    return this.usersService.softDeleteUser(id);
  }
}
