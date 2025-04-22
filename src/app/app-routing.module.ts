import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CupomComponent } from './components/cupom/cupom.component';
import { RouterModule, Routes } from '@angular/router';

import { PecasComponent } from './components/pecas/pecas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { VendaComponent } from './components/venda/venda.component';
import { VendasRealizadasComponent } from './components/vendas-realizadas/vendas-realizadas.component';

const routes: Routes = [
  { path: 'cupom', component: CupomComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-peca', component: PecasComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'vendas-realizadas', component: VendasRealizadasComponent },
  { path: '', redirectTo: 'cadastro-peca', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
