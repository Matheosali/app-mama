import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateStockDto {
  @IsNotEmpty()
  @IsNumber()
  change: number;
}