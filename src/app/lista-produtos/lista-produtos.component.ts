import { Component } from '@angular/core';
import { StockRegister } from '../model/stockRegister';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ILog } from '../model/logs';
import { LogsService } from '../cadastro/logs.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {

  productsList!: StockRegister[];
  listaLogs: ILog[] = [];
  name!: string;
  amount!: number;
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
    this.cadastroService.del(i)
  }
  clearLogs(): void {
    this.LogsService.clearLogs()
  }
  editproduct(): void {
    this.validateInputs(this.name, this.amount)
    let index: number = this.getIndex;
    let currentProduct: StockRegister = this.productsList[index]
    this.cadastroService.edit(index, this.name, this.amount);
    this.LogsService.editarLog(currentProduct, this.productsList[index])
  }
  /*   saveEdit(): void {
      this.validateEdit(this.newName, this.newAmount)
  
  
    } */

  validateInputs(product: string, amount: number) {
    if (!product) {
      alert("Preencha o campo nome")
      return;
    }

    if (!amount) {
      alert("Quantidade inválida")
      return;
    }

  }

}
