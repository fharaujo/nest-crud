import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesController } from './filmes/filmes.controller';
import { FilmesModule } from './filmes/filmes.module';
import { FilmesService } from './filmes/service/filmes.service';

@Module({
  imports: [FilmesModule],
  controllers: [AppController, FilmesController],
  providers: [AppService, FilmesService],
})
export class AppModule {}
