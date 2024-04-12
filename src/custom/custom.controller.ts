import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { ProviderService } from 'src/provider/provider.service';

@Controller('custom')
export class CustomController {
  constructor(private service: ProviderService) {}

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
