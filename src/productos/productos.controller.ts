import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param, Patch, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { UpdateStockDto } from './dto/update-stock.dto';


@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
    return { success: true };
  }

  @Patch('stock/:id')
  updateStock(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.productosService.updateStock(+id, updateStockDto.change);
  }
}

// // estadisticas.controller.ts
// @Controller('api/estadisticas')
// export class EstadisticasController {
//   constructor(private readonly estadisticasService: EstadisticasService) {}

//   @Get()
//   getEstadisticas() {
//     return this.estadisticasService.getEstadisticas();
//   }
// }
// }
