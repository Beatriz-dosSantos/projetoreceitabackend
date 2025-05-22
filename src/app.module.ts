import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitaModule } from './receita/receita.module';

@Module({
  imports: [ReceitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
