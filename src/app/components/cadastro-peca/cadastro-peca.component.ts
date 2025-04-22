import { Component } from '@angular/core';
import { PecaService } from '../../services/peca.service';
import { Peca } from '../../models/peca.model';

@Component({
  selector: 'app-cadastro-peca',
  templateUrl: './cadastro-peca.component.html'
})
export class CadastroPecaComponent {
  novaPeca: Peca = { nome: '', preco: 0, quantidade: 0 };

  constructor(private pecaService: PecaService) {}

  cadastrar() {
    this.pecaService.adicionarPeca(this.novaPeca);
    alert('Peça cadastrada com sucesso!');
    this.novaPeca = { nome: '', preco: 0, quantidade: 0 };
  }
}