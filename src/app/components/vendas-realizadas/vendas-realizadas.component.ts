import { Component, OnInit } from '@angular/core';
import { VendaService, Venda } from '../../services/venda.service';

@Component({
  selector: 'app-vendas-realizadas',
  templateUrl: './vendas-realizadas.component.html',
  styleUrls: ['./vendas-realizadas.component.css']
})
export class VendasRealizadasComponent implements OnInit {
  vendas: Venda[] = [];
  total: number = 0;

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.vendas = this.vendaService.getVendas().map(v => {
      const preco = Number(v.preco) || 0;
      const quantidade = Number(v.quantidade) || 0;
      const subtotal = preco * quantidade;

      return {
        ...v,
        preco,
        quantidade,
        subtotal
      };
    });

    this.total = this.vendas.reduce((acc, v) => acc + v.subtotal, 0);
  }
}
