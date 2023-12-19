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
  product!: string;
  productAmount!: number;
  getIndex!: number;

  constructor(
    private cadastroService: CadastroService,
    private LogsService: LogsService
  ) {
    this.productsList = this.cadastroService.products;
    this.listaLogs = this.LogsService.logs;
  }


  delProduct(i: number): void {
    this.LogsService.deleteLogs(this.productsList[i]);

  }
  clearLogs(): void {
    this.LogsService.clearLogs()
  }
  editproduct() {
    this.validateInputs(this.product, this.productAmount)

  }

  validateInputs(name: string, amount: number) {
    if (!name) {
      alert("Preencha o campo nome")
      return;
    }

    if (!amount) {
      alert("Quantidade inválida")
      return;
    }
    let index: number = this.getIndex;
    let currentProduct: StockRegister = this.productsList[index]
    this.LogsService.editarLog(currentProduct, this.productsList[index])
  }
}
