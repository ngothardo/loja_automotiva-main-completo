
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { VendaService } from '../../services/venda.service';
import { PecaService } from '../../services/peca.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private vendaService: VendaService, private pecaService: PecaService) {}

  ngOnInit(): void {
    this.gerarGraficoVendas();
    this.gerarGraficoEstoque();
  }

  gerarGraficoVendas() {
    const vendas = this.vendaService.getVendas();
    const porData: { [data: string]: number } = {};

    vendas.forEach(venda => {
      if (!porData[venda.data]) porData[venda.data] = 0;
      porData[venda.data] += venda.subtotal;
    });

    new Chart('graficoVendas', {
      type: 'bar',
      data: {
        labels: Object.keys(porData),
        datasets: [{
          label: 'Total em R$ por Data',
          data: Object.values(porData),
          borderWidth: 1
        }]
      }
    });
  }

  gerarGraficoEstoque() {
    const pecas = this.pecaService.getEstoque();
    const nomes = pecas.map(p => p.nome);
    const quantidades = pecas.map(p => p.quantidade);

    new Chart('graficoEstoque', {
      type: 'pie',
      data: {
        labels: nomes,
        datasets: [{
          label: 'Estoque',
          data: quantidades
        }]
      }
    });
  }
}
