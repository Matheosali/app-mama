// src/productos/dto/update-producto.dto.ts

import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, Min } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  talle?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  precioCosto?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  precioVenta?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  cantidad?: number;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}