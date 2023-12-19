import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogProdutosComponent } from './log-produtos/log-produtos.component';
import { LoginComponent } from './login/login.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: ListaProdutosComponent },
  { path: 'logsProduto', component: LogProdutosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
