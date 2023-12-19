import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { LogProdutosComponent } from './log-produtos/log-produtos.component';


import { CadastroService } from '../app/cadastro/cadastro.component.service';
import { LogsService } from './log-produtos/logs.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaProdutosComponent,
    LogProdutosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CadastroService, LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
