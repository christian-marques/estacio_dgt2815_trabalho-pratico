export class Livro {
    constructor(
        public codigo: string = "",
        public codEditora: number = 0,
        public titulo: string = '',
        public resumo: string = '',
        public autores: string[] = []
    ) {}
}

export interface LivroMongo {
    _id?: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}
