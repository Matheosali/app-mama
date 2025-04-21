import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { DatabaseModule } from '../database.module';
import { ProductosProviders } from './productos.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductosController],
  providers: [
    ...ProductosProviders,
    ProductosService],
})
export class ProductoModule {}
