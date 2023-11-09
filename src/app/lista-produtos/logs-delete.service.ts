import { Injectable } from '@angular/core';
import { StockRegister } from "../model/stockRegister";

@Injectable({
  providedIn: 'root'
})
export class LogsDeleteService {
  deletedProducts: { product: StockRegister, deletadoEm: Date }[] = []
  editLogs: { product: StockRegister, editedEm: Date, changesLog: string[] }[] = [];
  constructor() { }

  deleted(product: StockRegister): void {
    const deletedProduct = { product, deletadoEm: new Date() }
    this.deletedProducts.push(deletedProduct);

  }
  clearDeletedLogs(): void {
    console.log(this.deletedProducts);
    this.deletedProducts.length = 0;

    console.log(this.deletedProducts)
  }

}
