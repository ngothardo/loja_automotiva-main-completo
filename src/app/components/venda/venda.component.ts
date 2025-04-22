
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PecaService } from '../../services/peca.service';
import { VendaService, Venda } from '../../services/venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent {
  produtoSelecionado = '';
  quantidade = 1;
  mensagem: string = '';
  ultimaVenda: Venda | null = null;

  @ViewChild('audioSucesso') audioRef!: ElementRef<HTMLAudioElement>;

  constructor(public pecaService: PecaService, private vendaService: VendaService) {}

  vender() {
    const peca = this.pecaService.getPecaByNome(this.produtoSelecionado);
    if (peca && this.quantidade > 0 && peca.quantidade >= this.quantidade) {
      const venda = {
        produto: peca.nome,
        quantidade: this.quantidade,
        preco: peca.preco
      };
      this.vendaService.registrarVenda(venda);
      this.pecaService.atualizarEstoque(peca.nome, this.quantidade);
      this.ultimaVenda = {
        ...venda,
        subtotal: peca.preco * this.quantidade,
        data: new Date().toLocaleDateString('pt-BR')
      };
      this.produtoSelecionado = '';
      this.quantidade = 1;
      this.mensagem = '✅ Venda realizada com sucesso!';
      this.audioRef.nativeElement.play();
      setTimeout(() => this.mensagem = '', 3000);
    } else {
      this.mensagem = '❌ Estoque insuficiente ou dados inválidos!';
      setTimeout(() => this.mensagem = '', 3000);
    }
  }

  imprimirRecibo() {
    if (!this.ultimaVenda) return;
    const recibo = `
      Produto: ${this.ultimaVenda.produto}\n
      Quantidade: ${this.ultimaVenda.quantidade}\n
      Preço Unitário: R$ ${this.ultimaVenda.preco.toFixed(2)}\n
      Subtotal: R$ ${this.ultimaVenda.subtotal.toFixed(2)}\n
      Data: ${this.ultimaVenda.data}\n
    `;
    const janela = window.open('', '_blank');
    janela?.document.write(`<pre>${recibo}</pre>`);
    janela?.print();
  }
}
