import { Component } from '@angular/core';
import { StockRegister } from '../model/stockRegister';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ILog } from '../model/logs';
import { LogsService } from '../log-produtos/logs.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {

  productsList!: StockRegister[];
  product!: string;
  productAmount!: number;
  getIndex!: number;

  constructor(
    private cadastroService: CadastroService,
    private LogsService: LogsService
  ) {
    this.productsList = this.cadastroService.products;

  }


  delProduct(i: number): void {
    this.LogsService.deleteLogs(this.productsList[i]);
    this.cadastroService.del(i)
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
    this.cadastroService.edit(index, this.product, this.productAmount);
    this.LogsService.editarLog(currentProduct, this.productsList[index])
    this.product = '';
    this.productAmount = 0;
  }

}
