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

  getAllFilmes() {
    return this.filmes;
  }
  getByIdFilme(id: number) {
    const idFilme = this.filmes.find((filme) => filme.id === id);
    return idFilme;
  }
  createFilme(filme: Filme) {}
  updateFilme(filme: Filme) {}
  deleteFilme(id: number) {}
}
