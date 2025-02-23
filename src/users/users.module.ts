import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './controllers/customers.controller';
import { CustomerService } from './services/customers.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UserController, CustomerController],
  providers: [UsersService, CustomerService],
})
export class UsersModule {}
