import { Component } from '@angular/core';
import { LogsService } from './logs.service';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ILog } from '../model/logs';
import { StockRegister } from '../model/stockRegister';
@Component({
  selector: 'app-log-produtos',
  templateUrl: './log-produtos.component.html',
  styleUrls: ['./log-produtos.component.scss']
})
export class LogProdutosComponent {

  productsList!: StockRegister[];
  listaLogs: ILog[] = [];


  constructor(
    private cadastroService: CadastroService,
    private LogsService: LogsService
  ) {
    this.productsList = this.cadastroService.products;
    this.listaLogs = this.LogsService.logs;
  }


  clearLogs(): void {
    console.log(this.LogsService.logs);
    this.LogsService.clearLogs();
    console.log('Logs após limpar no componente:', this.LogsService.logs);
    // estava limpando visualmente antes, mas agora ele limpa e da pra ver só no console, to tentando ver o motivo
  }

}
