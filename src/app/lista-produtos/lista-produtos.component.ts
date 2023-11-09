import { Component } from '@angular/core';
import { StockRegister } from '../model/stockRegister';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { LogsDeleteService } from '../lista-produtos/logs-delete.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {
  productsList!: StockRegister[];
  deletedProductsList: { product: StockRegister, deletadoEm: Date }[] = [];
  productToEdit: StockRegister | null = null;
  newName!: string;
  newAmount!: number;

  constructor(
    private cadastroService: CadastroService,
    private LogsDeleteService: LogsDeleteService
  ) {
    this.productsList = this.cadastroService.products;
    this.deletedProductsList = this.LogsDeleteService.deletedProducts

  }


  delProduct(i: number): void {
    const deletedProductsList = this.productsList[i];
    this.cadastroService.del(i);
    this.LogsDeleteService.deleted(deletedProductsList);

  }
  clearLogs(): void {
    this.LogsDeleteService.clearDeletedLogs()

  }
  editproduct(i: number, newName: string, newAmount: number): void {

    this.productToEdit = this.productsList[i];
    this.newName = newName;
    this.newAmount = newAmount;

  }
  saveEdit(): void {
    this.validateEdit(this.newName, this.newAmount)
  }
  openModal() {
    const modelDiv = document.getElementById('myModalEdition');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modelDiv = document.getElementById('myModalEdition');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  validateEdit(newName: string, newAmount: number) {
    if (!newName) {
      alert("Preencha o nome")
      return
    }
    if (!newAmount) {
      alert("Quantidade só pode ter números")
      return
    }
    if (this.productToEdit) {
      this.cadastroService.edit(this.productsList.indexOf(this.productToEdit), this.newName, this.newAmount);

      this.newName = '';
      this.newAmount = 0;
      alert("o produto foi editado!")
    }
  }
}
