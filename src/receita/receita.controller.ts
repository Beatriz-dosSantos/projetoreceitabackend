import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Controller('receita')
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitaService.create(createReceitaDto);
  }

  @Get()
  findAll() {
    return this.receitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitaService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitaService.remove(id);
  }
}


/*import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query,
} from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Controller('receita')
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitaService.create(createReceitaDto);
  }

  @Get()
  findAll(
    @Query ('nome') nome: string,
    @Query ('quantidade') quantidade: number,
    @Query ('preco') preco: number,
    @Query ('cliente') cliente: string,
    @Query ('sort') sort: 'nome' | 'quantidade' | 'preco' | 'cliente' = 'nome',
    @Query ('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.receitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReceitaDto: UpdateReceitaDto,
  ) {
    return this.receitaService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitaService.remove(id);
  }
} */