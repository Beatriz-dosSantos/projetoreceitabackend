import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ReceitaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(receita: any): Receita {
    return {
      id: receita.id,
      descricao: receita.descricao,
      ingredientes: receita.ingredientes,
      quantidade: receita.quantidade,
      tempo: receita.tempo,
      modoprep: receita.modoprep,
    };
  }

  async create(createReceitaDto: CreateReceitaDto): Promise<Receita> {
    const receita = await this.prisma.receita.create({
      data: {
        descricao: createReceitaDto.descricao,
        ingredientes: createReceitaDto.ingredientes,
        quantidade: createReceitaDto.quantidade,
        tempo: createReceitaDto.tempo,
        modoprep: createReceitaDto.modoprep
      }
    });
    return this.mapToEntity(receita);
  }

  async findAll(): Promise<Receita[]> {
    const receita = await this.prisma.receita.findMany();
    return receita.map((receita) => this.mapToEntity(receita));
  }

  async findOne(id: string): Promise<Receita> {
    const receita = await this.prisma.receita.findUnique({
      where: { id },
    });
    if (!receita) {
      throw new NotFoundException(`This action returns a #${id} receita`);
    }
    return this.mapToEntity(receita);
  }

  async update(id: string, updateReceitaDto: UpdateReceitaDto): Promise<Receita> {
    const receitaExistente = await this.prisma.receita.findUnique({
      where: { id },
    });

    if (!receitaExistente) {
      throw new NotFoundException(`Receita com ID ${id} não encontrada`);
    }

    const receitaAtualizada = await this.prisma.receita.update({
      where: { id },
      data: updateReceitaDto,
    });

    return this.mapToEntity(receitaAtualizada);
  }

  async remove(id: string): Promise<Receita> {
    const receitaExistente = await this.prisma.receita.findUnique({
      where: { id },
    });

    if (!receitaExistente) {
      throw new NotFoundException(`Receita com ID ${id} não encontrada`);
    }

    const receitaRemovida = await this.prisma.receita.delete({
      where: { id },
    });

    return this.mapToEntity(receitaRemovida);
  }
}
/*import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class receitaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(receita: any): Receita {
    return {
      id: receita.id,
      descricao: receita.descricao,
      data: receita.data,
      hora: receita.hora,
      prioridade: receita.prioridade,
    };
  }

  async create(createReceitaDto: CreateReceitaDto): Promise<Receita> {
    const receita = await this.prisma.receita.create({
      data: {
        data: createReceitaDto.data,
        hora: createReceitaDto.hora,
        descricao: createReceitaDto.descricao,
        prioridade: createReceitaDto.prioridade,
      },
    });
    return this.mapToEntity(receita);
  }

  async findAll(): Promise<Receita[]> {
    const receita = await this.prisma.receita.findMany();
    return receita.map((receita) => this.mapToEntity(receita));
  }

  async findOne(id: String): Promise<Receita> {
    const receita = await this.prisma.receita.findUnique({
      where: { id },
    });
    if (!receita) {
      throw new NotFoundException(This action returns a #${id} receita);
    }
    return this.mapToEntity(receita);
  }

  async update(id: String, updateReceitaDto: UpdateReceitaDto): Promise<Receita> {
    const receitaExistente = await this.prisma.receita.findUnique({
      where: { id },
    });

    if (!receitaExistente) {
      throw new NotFoundException(Receita com ID ${id} não encontrada);
    }

    const receitaAtualizada = await this.prisma.receita.update({
      where: { id },
      data: updateReceitaDto,
    });

    return this.mapToEntity(receitaAtualizada);
  }

  async remove(id: String): Promise<Receita> {
    const receitaExistente = await this.prisma.receita.findUnique({
      where: { id },
    });

    if (!receitaExistente) {
      throw new NotFoundException(Receita com ID ${id} não encontrada);
    }

    const receitaRemovida = await this.prisma.receita.delete({
      where: { id },
    });

    return this.mapToEntity(receitaRemovida);
  }
}*/