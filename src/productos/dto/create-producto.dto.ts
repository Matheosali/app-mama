// src/productos/dto/create-producto.dto.ts

import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, Min } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsNotEmpty()
  @IsString()
  talle: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precioCosto: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precioVenta: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  cantidad: number;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}