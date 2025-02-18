import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getCustomers() {
    return this.customerService.findAll();
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return this.customerService.create(payload);
  }

  @Put()
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, payload);
  }

  @Delete()
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.remove(id);
  }
}
