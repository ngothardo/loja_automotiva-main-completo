import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent implements OnInit {
  pecas: any[] = [];

  ngOnInit(): void {
    const dados = localStorage.getItem('pecas');
    this.pecas = dados ? JSON.parse(dados) : [];
  }
}
