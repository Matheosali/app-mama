import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './productos.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
    //constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
    constructor(
        @Inject('PHOTO_REPOSITORY')
        private productoRepository: Repository<Producto>,
    ) {}
    
    findAll(): Promise<Producto[]> {
        return this.productoRepository.find();
    }

    create(producto: CreateProductoDto){
        const newUser = this.productoRepository.create(producto);
        return this.productoRepository.save(newUser);
    }

    findOne(id: number){
        return this.productoRepository.findOne({ where: { id } });
    }

    async update(id: number, updateProductoDto: UpdateProductoDto){
        const result = await this.productoRepository.update(id, updateProductoDto);
        
        if (result.affected === 0) {
          throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        
        return this.findOne(id);
      }
    
    remove(id: number){
        return this.productoRepository.delete(id);
    }

    updateStock(id: number, change: number) {
        return this.productoRepository.update(id, { cantidad: () => `cantidad + ${change}` });
    }
}
