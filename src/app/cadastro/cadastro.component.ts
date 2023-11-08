import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { StockRegister } from '../model/stockRegister';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  products!: string;
  productsList!: StockRegister[];
  productsAmount!: number;

  constructor(private cadastroService: CadastroService) {
    this.productsList = this.cadastroService.products;
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
      alert("Quantidade invalida")
      return;
    }

    this.cadastroService.add(this.products, this.productsAmount)
    this.products = '';
    this.productsAmount = 0;
  }

}
