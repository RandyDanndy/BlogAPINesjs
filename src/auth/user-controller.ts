import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user-service';
import { User } from 'src/user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  create(@Body() data: Partial<User>): Promise<User> {
    return this.userService.create(data);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne({ id });
  }
}
