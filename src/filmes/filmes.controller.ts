import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  // route controller criar um filme
  @Post()
  async create(@Body() filme: Filme): Promise<Filme> {
    return this.filmeService.createFilme(filme);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() filme: Filme): Promise<Filme> {
    filme.id = +id;
    return this.filmeService.updateFilme(filme);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.filmeService.deleteFilme(+id);
  }
}
