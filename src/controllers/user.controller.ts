import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UsernameService } from '../services/username.service';
import { UserDto } from '../models/user.dto';

@Controller('booking')
export class usernameController {
  constructor(private readonly UsernameService: UsernameService) {}

  @Post()
  bookVehicle(@Body(new ValidationPipe()) user: UserDto) {
        return this.UsernameService.UsernameInsert(user);
  }
}