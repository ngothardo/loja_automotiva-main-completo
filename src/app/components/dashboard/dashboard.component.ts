import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.gerarGraficoVendas();
    this.gerarGraficoEstoque();
  }

  gerarGraficoVendas() {
    new Chart('graficoVendas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [{
          label: 'Vendas (R$)',
          data: [500, 800, 600, 750, 900],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Gráfico de Vendas'
          }
        }
      }
    });
  }

  gerarGraficoEstoque() {
    new Chart('graficoEstoque', {
      type: 'pie',
      data: {
        labels: ['Peça A', 'Peça B', 'Peça C'],
        datasets: [{
          label: 'Estoque Atual',
          data: [20, 15, 30],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Gráfico de Estoque'
          }
        }
      }
    });
  }
}
