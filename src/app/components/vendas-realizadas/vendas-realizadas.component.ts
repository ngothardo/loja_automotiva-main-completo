import { Component, OnInit } from '@angular/core';
import { Venda } from './venda.model';

@Component({
  selector: 'app-vendas-realizadas',
  templateUrl: './vendas-realizadas.component.html'
})
export class VendasRealizadasComponent implements OnInit {
  vendas: Venda[] = [];
  total: number = 0;

  ngOnInit(): void {
    const dados = localStorage.getItem('vendas');
    this.vendas = dados ? JSON.parse(dados) : [];
    this.total = this.vendas.reduce((acc, v) => acc + Number(v.valor), 0);
  }
}
