import { Injectable } from '@nestjs/common';
import { Filme } from './filme';

@Injectable()
export class FilmesService {
  filmes: Filme[] = [
    {
      id: 1,
      nome: 'Filme 1',
      imagemURL: '',
    },
    {
      id: 3,
      nome: 'Filme 2',
      imagemURL: '',
    },
    {
      id: 3,
      nome: 'Filme 3',
      imagemURL: '',
    },
    {
      id: 4,
      nome: 'Filme 4',
      imagemURL: '',
    },
  ];

  // service para buscar todos os filmes
  getAllFilmes() {
    return this.filmes;
  }

  // service para buscar filme por id
  getByIdFilme(id: number) {
    const filme = this.filmes.find((filme) => filme.id === id);
    return filme;
  }
  createFilme(filme: Filme) {}
  updateFilme(filme: Filme) {}
  deleteFilme(id: number) {}
}
