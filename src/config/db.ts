import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest-user',
  password: 'nest-password',
  database: 'nest-db',
  entities: [User],
  synchronize: true,
};

export const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'nest-db',
  entities: [User],
  synchronize: true,
};
