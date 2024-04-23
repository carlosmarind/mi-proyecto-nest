import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('custom')
export class UserController {
  constructor(private service: UserService) {}

  @Get('hello')
  hello(): string {
    return 'Hello World another time!';
  }

  @Post('goodbye')
  goodbye(): string {
    return this.service.getGoodbye();
  }

  @Post('user')
  async createUser(@Body() body: User): Promise<User> {
    const user = new User();
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.isActive = body.isActive;
    const createdUser: User = await this.service.saveUser(user);
    return createdUser;
  }

  @Get('user/:id')
  async findUser(@Param() params: any): Promise<User> {
    return await this.service.find(params.id);
  }
}
