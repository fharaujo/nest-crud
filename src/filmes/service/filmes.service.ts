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

  // service para criar um filme
  createFilme(filme: Filme) {
    let idAtual = 0;
    if (this.filmes.length > 0) {
      idAtual = this.filmes[this.filmes.length - 1].id;
    }

    filme.id = idAtual + 1;
    this.filmes.push(filme);

    return filme;
  }

  // service para atualizar filme
  updateFilme(filme: Filme) {
    const filmeLista = this.getByIdFilme(filme.id);

    if (filmeLista) {
      filmeLista.nome = filme.nome;
      filmeLista.imagemURL = filme.imagemURL;
    }

    return filmeLista;
  }

  // service para excluir filme pelo id
  deleteFilme(id: number) {
    const filmeIndex = this.filmes.findIndex((filme) => filme.id == id);

    this.filmes.splice(filmeIndex, 1);
  }
}
