import { Component } from '@angular/core';
import { PecaService } from '../../services/peca.service';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.css']
})
export class PecasComponent {
  novaPeca = {
    nome: '',
    preco: 0,
    quantidade: 0
  };

  constructor(private pecaService: PecaService) {}

  cadastrar() {
    this.pecaService.adicionarPeca(this.novaPeca);
    this.novaPeca = { nome: '', preco: 0, quantidade: 0 };
  }
}
