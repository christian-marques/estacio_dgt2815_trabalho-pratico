import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Livro } from '../models/livro';
import { Editora } from '../models/editora';

import { ControleLivrosService } from '../services/controle-livros.service';
import { ControleEditoraService } from '../services/controle-editora.service';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = async (): Promise<void> => {
    this.livro.autores = this.autoresForm.split('\n');
    const ok = await this.servLivros.incluir(this.livro);
    if (ok) this.router.navigateByUrl('/lista');
  }
}
