import { Injectable } from '@angular/core';

export interface Peca {
  nome: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private estoque: Peca[] = [];

  constructor() {
    const dados = localStorage.getItem('estoque');
    if (dados) {
      this.estoque = JSON.parse(dados);
    }
  }

  adicionarPeca(peca: Peca) {
    this.estoque.push({ ...peca });
    this.salvarLocalStorage();
  }

  getEstoque(): Peca[] {
    return this.estoque;
  }

  getPecaByNome(nome: string): Peca | undefined {
    return this.estoque.find(p => p.nome === nome);
  }

  atualizarEstoque(nome: string, quantidadeVendida: number) {
    const peca = this.getPecaByNome(nome);
    if (peca) {
      peca.quantidade -= quantidadeVendida;
      this.salvarLocalStorage();
    }
  }

  private salvarLocalStorage() {
    localStorage.setItem('estoque', JSON.stringify(this.estoque));
  }
}
