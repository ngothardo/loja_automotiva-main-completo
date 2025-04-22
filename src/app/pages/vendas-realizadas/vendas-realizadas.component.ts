
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
    this.vendas = this.vendaService.getVendas();
    this.total = this.vendas.reduce((acc, v) => acc + v.subtotal, 0);
  }
}
