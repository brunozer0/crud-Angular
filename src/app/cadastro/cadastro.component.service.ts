import { Injectable } from "@angular/core";
import { StockRegister } from "../model/stockRegister";

@Injectable({
    providedIn: "root"
})
export class CadastroService {
    products: StockRegister[] = []

    add(name: string, amount: number): void {

        const newProduct: StockRegister = {
            name: name,
            amount: amount
        }
        this.products.push(newProduct)
    }
    del(i: number): void {
        this.products.splice(i, 1)
    }
    edit(i: number, newName: string, newAmount: number): void {

        if (i >= 0 && i < this.products.length) {
            const updatedProduct: StockRegister = {
                name: newName,
                amount: newAmount
            };
            this.products[i] = updatedProduct;

        }
    }
}