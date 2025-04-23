import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VendasRealizadasComponent } from './components/vendas-realizadas/vendas-realizadas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { CadastroPecaComponent } from './components/cadastro-peca/cadastro-peca.component';
import { VendaComponent } from './components/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    VendasRealizadasComponent,
    EstoqueComponent,
    CadastroPecaComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'vendas', pathMatch: 'full' },
      { path: 'vendas', component: VendasRealizadasComponent },
      { path: 'estoque', component: EstoqueComponent },
      { path: 'cadastro', component: CadastroPecaComponent },
      { path: 'venda', component: VendaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
