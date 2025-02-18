import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomerService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Nuria',
      lastName: 'Cordoba',
      phone: '3111111212',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) throw new NotFoundException(`Customer #${id} not found`);
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    this.customers[customerIndex] = {
      ...customer,
      ...payload,
    };
    return this.customers[customerIndex];
  }

  remove(id: number) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    if (customerIndex === -1)
      throw new NotFoundException(`Customer #${id} not found`);
    this.customers.slice(customerIndex, 1);
    return;
  }
}
