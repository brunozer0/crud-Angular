import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
