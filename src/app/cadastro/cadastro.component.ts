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
  product!: string;
  productsList!: StockRegister[];
  productAmount!: number;
  listaLogs!: ILog[];


  constructor(private cadastroService: CadastroService, private loggerService: LogsService) {
    this.productsList = this.cadastroService.products;
    this.listaLogs = this.loggerService.logs;
  }
  addNewProduct(): void {
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

    this.cadastroService.add(this.product, this.productAmount)
    this.product = '';
    this.productAmount = 0;
  }

}
