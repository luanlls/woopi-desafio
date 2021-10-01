import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  getColor(users : UsuarioService["usuario"]) {

  }

}
