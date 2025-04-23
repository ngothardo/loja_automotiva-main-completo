import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-peca',
  templateUrl: './cadastro-peca.component.html'
})
export class CadastroPecaComponent {
  novaPeca = {
    nome: '',
    preco: 0,
    estoque: 0
  };

  cadastrar() {
    const pecas = JSON.parse(localStorage.getItem('pecas') || '[]');
    pecas.push(this.novaPeca);
    localStorage.setItem('pecas', JSON.stringify(pecas));
    this.novaPeca = { nome: '', preco: 0, estoque: 0 };
    alert('Peça cadastrada com sucesso!');
  }
}
