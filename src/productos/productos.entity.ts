// src/productos/entities/producto.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  marca: string;

  @Column()
  talle: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioCosto: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioVenta: number;

  @Column('int')
  cantidad: number;

  @Column({ nullable: true })
  imagenUrl: string;
}