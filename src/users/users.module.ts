import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
