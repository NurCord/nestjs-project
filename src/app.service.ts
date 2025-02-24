import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    console.log(
      this.configService.get('API_KEY'),
      this.configService.get('DATABASE_NAME'),
    );
    return `Hello World ${this.configService.get('API_KEY')}`;
  }
}
