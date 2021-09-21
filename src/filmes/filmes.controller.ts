import { Controller, Get, Param } from '@nestjs/common';
import { Filme } from './service/filme';
import { FilmesService } from './service/filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private filmeService: FilmesService) {}

  @Get()
  async getAll(): Promise<Filme[]> {
    return this.filmeService.getAllFilmes();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Filme> {
    return this.filmeService.getByIdFilme(+id);
  }
}
