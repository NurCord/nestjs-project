import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    const apiKey = this.configService.get('API_KEY');
    const databaseName = this.configService.get('DATABASE_NAME');
    return `Hello World ${apiKey} ${databaseName}`;
  }
}
