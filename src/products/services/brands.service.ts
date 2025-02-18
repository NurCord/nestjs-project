import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotAcceptableException(`Brand #${id} not found`);
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    const brandIndex = this.brands.findIndex((brand) => brand.id === id);
    this.brands[brandIndex] = {
      ...brand,
      ...payload,
    };
    return this.brands[brandIndex];
  }

  delete(id: number) {
    const brandIndex = this.brands.findIndex((brand) => brand.id === id);
    if (brandIndex === -1)
      throw new NotFoundException(`Brand #${id} not found`);
    this.brands.splice(brandIndex, 1);
    return;
  }
}
