import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppComponent } from './app.component';
import { PecasComponent } from './components/pecas/pecas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { VendaComponent } from './components/venda/venda.component';
import { VendasRealizadasComponent } from './components/vendas-realizadas/vendas-realizadas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

registerLocaleData(ptBr);

const routes: Routes = [
  { path: '', redirectTo: 'vendas-realizadas', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-peca', component: PecasComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'vendas-realizadas', component: VendasRealizadasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PecasComponent,
    EstoqueComponent,
    VendaComponent,
    VendasRealizadasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
   
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
