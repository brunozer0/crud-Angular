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


  productToEdit: StockRegister | null = null;
  newName: string = '';
  newAmount: number = 0;

  constructor(private cadastroService: CadastroService) {
    this.productsList = this.cadastroService.products;
  }
  addNewProduct(): void {
    this.validateInputs(this.products, this.productsAmount)

  }
  delProduct(i: number): void {
    this.cadastroService.del(i);
  }
  editproduct(i: number, newName: string, newAmount: number): void {
    this.productToEdit = this.productsList[i];
    this.newName = newName;
    this.newAmount = newAmount;

  }
  saveEdit(): void {
    if (this.productToEdit) {
      this.cadastroService.edit(this.productsList.indexOf(this.productToEdit), this.newName, this.newAmount);
    }
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
  openModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
