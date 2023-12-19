import { Injectable } from '@angular/core';
import { ILog } from "../model/logs";
import { StockRegister } from '../model/stockRegister';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: ILog[] = [
  ];



  addLogs = (newItem: StockRegister) => {
    const log: ILog = {
      hora: new Date().toLocaleTimeString('pt-BR'),
      data: new Date().toLocaleDateString('pt-br'),
      descricao: `Nome - ${newItem.name}; 
      Idade - ${newItem.amount}`,
      tipo: 'Cadastro'
    };

    this.logs.push(log)
  }
  deleteLogs = (deletedItem: StockRegister) => {
    const log: ILog = {
      hora: new Date().toLocaleTimeString('pt-BR'),
      data: new Date().toLocaleDateString('pt-br'),
      descricao: `Produto: ${deletedItem.name} |
      Qtde: ${deletedItem.amount}`,
      tipo: 'Exclusão'
    };
    this.logs.push(log);
  };
  editarLog = (oldItem: StockRegister, newItem: StockRegister) => {
    const log: ILog = {
      hora: new Date().toLocaleTimeString('pt-BR'),
      data: new Date().toLocaleDateString('pt-br'),
      descricao: `Produto: ${oldItem.name}
      qtd: ${oldItem.amount} | > ${newItem.name}|${newItem.amount}`,
      tipo: 'Edição'
    };
    this.logs.push(log);
  };

  clearLogs() {
    console.log('Limpando logs no serviço...');

    // this.logs = [];  // porque ele nao limpa assim??

    this.logs.length = 0; //assim funciona
  }
}
