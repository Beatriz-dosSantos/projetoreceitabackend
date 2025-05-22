import { Injectable } from '@nestjs/common';
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
      data: createReceitaDto
    });
    return this.mapToEntity(receita);
  }

  async findAll(): Promise<Receita[]> {
    const receita = await this.prisma.receita.findMany();
    return receita.map((receita) => this.mapToEntity(receita));
  }

  findOne(id: number) {
    return `This action returns a #${id} receita`;
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
