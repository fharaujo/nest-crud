import { Module } from '@nestjs/common';
import { FilmesService } from './service/filmes.service';

@Module({
  providers: [FilmesService]
})
export class FilmesModule {}
