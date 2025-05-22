import {IsNumber, IsString} from 'class-validator'

export class CreateReceitaDto {
  @IsString()
  descricao: string;
  
  @IsString()
  ingredientes: string;
  
  @IsNumber()
  quantidade: number;
  
  @IsNumber()
  tempo: number;
  
  @IsString()
  modoprep: string;
}