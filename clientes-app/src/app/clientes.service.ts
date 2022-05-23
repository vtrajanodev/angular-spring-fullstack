import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente)
  }


  getCliente(): Cliente {
    const cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '8888';

    return cliente
  }
}
