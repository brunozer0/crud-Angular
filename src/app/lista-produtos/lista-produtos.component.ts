import { Component } from '@angular/core';
import { StockRegister } from '../model/stockRegister';
import { CadastroService } from '../cadastro/cadastro.component.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {
  productsList!: StockRegister[];

  productToEdit: StockRegister | null = null;
  newName!: string;
  newAmount!: number;

  constructor(private cadastroService: CadastroService) {
    this.productsList = this.cadastroService.products;
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
