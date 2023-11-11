import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { StockRegister } from '../model/stockRegister';
import { LogsService } from './logs.service';
import { ILog } from '../model/logs';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  products!: string;
  productsList!: StockRegister[];
  productsAmount!: number;
  listaLogs!: ILog[];
  name!: string;
  amount: number = 0;

  constructor(private cadastroService: CadastroService, private loggerService: LogsService) {
    this.productsList = this.cadastroService.products;
    this.listaLogs = this.loggerService.logs;
  }
  addNewProduct(): void {
    this.validateInputs(this.products, this.productsAmount)

  }

  validateInputs(product: string, amount: number) {
    if (!product) {
      alert("Preencha o campo nome")
      return;
    }

    if (!amount) {
      alert("Quantidade inválida")
      return;
    }

    this.cadastroService.add(this.products, this.productsAmount)
    this.products = '';
    this.productsAmount = 0;
  }

}
