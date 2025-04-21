import { DataSource } from 'typeorm';
import { Producto } from './productos.entity';

export const ProductosProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Producto),
    inject: ['DATA_SOURCE'],
  },
];