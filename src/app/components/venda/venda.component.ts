import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html'
})
export class VendaComponent implements OnInit {
  pecas: any[] = [];
  produtoSelecionado: string = '';
  quantidade: number = 1;
  formaPagamento: string = 'Dinheiro';
  mensagem: string = '';
  ultimaVenda: any = null;

  @ViewChild('audioSucesso') audioSucesso!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    const dados = localStorage.getItem('pecas');
    this.pecas = dados ? JSON.parse(dados) : [];
    console.log('PEÇAS CARREGADAS:', this.pecas);
  }
  

  vender(): void {
    const peca = this.pecas.find(p => p.nome === this.produtoSelecionado);

    if (!peca) {
      alert('Selecione uma peça válida.');
      return;
    }

    if (this.quantidade > peca.estoque) {
      alert('Quantidade maior que o estoque disponível.');
      return;
    }

    const venda = {
      data: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      pedido: Math.floor(Math.random() * 1000),
      codigo: Math.floor(Math.random() * 1000),
      produto: peca.nome,
      valor: peca.preco * this.quantidade,
      formaPagamento: this.formaPagamento
    };

    const vendas = JSON.parse(localStorage.getItem('vendas') || '[]');
    vendas.push(venda);
    localStorage.setItem('vendas', JSON.stringify(vendas));

    // Atualiza estoque
    peca.estoque -= this.quantidade;
    localStorage.setItem('pecas', JSON.stringify(this.pecas));

    this.ultimaVenda = venda;
    this.mensagem = 'Venda realizada com sucesso!';
    this.produtoSelecionado = '';
    this.quantidade = 1;
    this.formaPagamento = 'Dinheiro';

    this.audioSucesso?.nativeElement?.play();
  }

  imprimirRecibo(): void {
    if (!this.ultimaVenda) return;

    const recibo = `
      🚗 Loja Automotiva
      ---------------------------
      Produto: ${this.ultimaVenda.produto}
      Quantidade: ${this.quantidade}
      Valor: R$ ${this.ultimaVenda.valor.toFixed(2)}
      Forma de Pagamento: ${this.ultimaVenda.formaPagamento}
      Data: ${this.ultimaVenda.data}
      Hora: ${this.ultimaVenda.hora}
      ---------------------------
      Obrigado pela compra!
     !! Volte Sempre !!
    `;

    const win = window.open('', '_blank');
    win?.document.write(`<pre>${recibo}</pre>`);
    win?.print();
    win?.close();
  }
}
