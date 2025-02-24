import { Global, Module } from '@nestjs/common';

// NestJS otorga la posibilidad de crear módulos globales
// que se importarán automáticamente en todos los otros módulos
// de la aplicación, sin necesidad de importarlos explícitamente.
@Global()
@Module({
  /*   providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'], */
})
export class DatabaseModule {}
