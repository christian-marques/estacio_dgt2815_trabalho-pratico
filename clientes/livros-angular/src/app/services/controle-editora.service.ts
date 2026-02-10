import { Injectable } from '@angular/core';
import { Editora } from '../models/editora';



@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Editora[] = [
    new Editora(1, 'Rocco'),
    new Editora(2, 'Intrínseca'),
    new Editora(3, 'Martin Claret'),
    new Editora(4, 'Record'),
    new Editora(5, 'Globo Livros'),
    new Editora(6, 'Sextante'),
    new Editora(7, 'Objetiva'),
    new Editora(8, 'Aleph'),
    new Editora(9, 'DarkSide Books'),
    new Editora(10, 'Companhia das Letras'),
    new Editora(11, 'Editora Abril'),
    new Editora(12, 'FTD'),
    new Editora(13, 'Moderna'),
    new Editora(14, 'Saraiva'),
    new Editora(15, 'Scipione'),
    new Editora(16, 'Penguin Random House'),
    new Editora(17, 'HarperCollins'),
    new Editora(18, 'Bloomsbury'),
    new Editora(19, 'Oxford University Press'),
    new Editora(20, 'Cambridge University Press'),
    new Editora(21, 'Outra')
  ];


  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const encontrados = this.editoras.filter(e => e.codEditora === codEditora);
    return encontrados.length ? encontrados[0].nome : '';
  }

}
