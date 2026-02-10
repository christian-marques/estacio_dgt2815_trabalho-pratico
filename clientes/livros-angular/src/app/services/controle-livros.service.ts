import { Injectable } from '@angular/core';
import { Livro, LivroMongo } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  // private livros: Livro[] = [
  //   new Livro(
  //     "1",
  //     1,
  //     'Harry Potter e as Relíquias da Morte',
  //     'Último livro da saga Harry Potter, no qual Harry, Rony e Hermione partem em uma jornada para destruir as Horcruxes e enfrentar Voldemort.',
  //     ['J. K. Rowling']
  //   ),
  //   new Livro(
  //     "2",
  //     2,
  //     'Percy Jackson e os Olimpianos: O Último Olimpiano',
  //     'Percy Jackson enfrenta a batalha final contra Cronos para proteger o Olimpo, em um confronto decisivo que define o destino dos deuses e dos semideuses.',
  //     ['Rick Riordan']
  //   ),
  //   new Livro(
  //     "3",
  //     3,
  //     'O Morro dos Ventos Uivantes',
  //     'Clássico da literatura inglesa que narra uma história intensa de amor, obsessão e vingança entre as famílias Earnshaw e Linton.',
  //     ['Emily Brontë']
  //   )
  // ];

  private baseURL = 'http://localhost:3030/livros';

  constructor() { }

  async obterLivros(): Promise<Livro[]> {
    try {
      const resp = await fetch(this.baseURL, { method: 'GET' });
      if (!resp.ok) return [];
      const data: LivroMongo[] = await resp.json();
      return data.map(d => new Livro(String(d._id ?? ''), d.codEditora, d.titulo, d.resumo, d.autores));
    } catch (e) {
      return [];
    }
  }

  async incluir(livro: Livro): Promise<boolean> {
    try {
      const payload = {
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      } as LivroMongo;
      const resp = await fetch(this.baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return resp.ok;
    } catch (e) {
      return false;
    }
  }

  async excluir(codigo: string): Promise<boolean> {
    try {
      const resp = await fetch(`${this.baseURL}/${codigo}`, { method: 'DELETE' });
      return resp.ok;
    } catch (e) {
      return false;
    }
  }

  async getNomeAutor(codigo: string): Promise<string[]> {
    const livros = await this.obterLivros();
    const encontrado = livros.find(l => l.codigo === codigo);
    return encontrado ? encontrado.autores : [];
  }
}
