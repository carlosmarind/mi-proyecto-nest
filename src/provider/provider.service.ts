import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getGoodbye(): string {
    return 'Goodbye!';
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
  find(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }
}
