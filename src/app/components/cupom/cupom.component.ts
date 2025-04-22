
import { Component, OnInit } from '@angular/core';
import { VendaService, Venda } from '../../services/venda.service';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.component.html',
  styleUrls: ['./cupom.component.css']
})
export class CupomComponent implements OnInit {
  venda: Venda | null = null;
  qrCodeData: string = '';

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    const vendas = this.vendaService.getVendas();
    this.venda = vendas[vendas.length - 1] || null;

    if (this.venda) {
      this.qrCodeData = `https://antunestech.com.br/recibo?id=${btoa(JSON.stringify(this.venda))}`;
    }
  }

  imprimir() {
    window.print();
  }
}
