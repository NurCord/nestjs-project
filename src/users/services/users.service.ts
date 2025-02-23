import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { ProductsService } from 'src/products/services/products.service';
import { Order } from '../entities/order.entity';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user-1@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = {
      ...user,
      ...payload,
    };
    return this.users[userIndex];
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new NotFoundException(`User #${id} not found`);
    this.users.splice(userIndex, 1);
    return;
  }

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
