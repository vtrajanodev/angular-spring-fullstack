import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemError: string;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(response => {
        this.clientes = response;
      })
  }

  novoCadastro(): void {
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  deletarCliente(id: number) {
    this.service
    .deletar(this.clienteSelecionado.id)
    .subscribe(response => {
      this.mensagemSucesso = 'Cliente deletado com sucesso'
      this.ngOnInit()
    },
    error => {
      this.mensagemError = 'Ocorreu um erro ao deletar o cliente.'
    })
  }
}
