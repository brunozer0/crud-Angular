import { Injectable } from '@angular/core';
import { StockRegister } from "../model/stockRegister";

@Injectable({
  providedIn: 'root'
})
export class LogsDeleteService {
  deletedProducts: { product: StockRegister, deletadoEm: Date }[] = []
  constructor() { }

  delete(product: StockRegister): void {
    const deletedProduct = { product, deletadoEm: new Date() }
    this.deletedProducts.push(deletedProduct);

  }

}
