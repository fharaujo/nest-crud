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
      nome: 'Filme 1',
      imagemURL: '',
    },
    {
      id: 3,
      nome: 'Filme 1',
      imagemURL: '',
    },
    {
      id: 1,
      nome: 'Filme 1',
      imagemURL: '',
    },
  ];
}
