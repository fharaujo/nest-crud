import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesController } from './filmes/filmes.controller';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [FilmesModule],
  controllers: [AppController, FilmesController],
  providers: [AppService],
})
export class AppModule {}
