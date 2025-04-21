import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './productos/productos.module';

@Module({
  imports: [ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
