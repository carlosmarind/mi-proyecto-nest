import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomController } from 'src/custom/custom.controller';
import { User } from 'src/entities/user.entity';
import { ProviderService } from 'src/provider/provider.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ProviderService],
  controllers: [CustomController],
})
export class UserModule {}
