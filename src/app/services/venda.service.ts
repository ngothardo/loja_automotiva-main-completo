
import { Injectable } from '@angular/core';

export interface Venda {
  produto: string;
  quantidade: number;
  preco: number;
  subtotal: number;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private vendas: Venda[] = [];

  constructor() {
    const dados = localStorage.getItem('vendas');
    if (dados) {
      this.vendas = JSON.parse(dados);
    }
  }

  registrarVenda(venda: Partial<Venda>) {
    const preco = Number(venda.preco) || 0;
    const quantidade = Number(venda.quantidade) || 0;
    const subtotal = preco * quantidade;
    const data = venda.data || new Date().toLocaleDateString('pt-BR');

    this.vendas.push({
      produto: venda.produto || '',
      preco,
      quantidade,
      subtotal,
      data
    });

    this.salvarLocalStorage();
  }

  getVendas(): Venda[] {
    return this.vendas;
  }

  private salvarLocalStorage() {
    localStorage.setItem('vendas', JSON.stringify(this.vendas));
  }
}
