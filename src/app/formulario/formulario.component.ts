import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  clickedCriar: boolean = false;
  menorIdade: boolean = false;
  aparecerLista: boolean = false;


  nome = "";
  email = "";
  tel = "";
  endereco = "";
  idade = 0;
  preferencias = "";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  setButtonCriarTrue() {
    this.clickedCriar = true;
    this.usuarioService.lista = false;
  }

  clearInput() {
    this.nome = "";
    this.email = "";
    this.tel = "";
    this.endereco = "";
    this.idade = 0;
    this.preferencias = "";
  }

  addUsuario() {
    if (this.idade >= 18) {
      this.menorIdade = false;
      this.clickedCriar = false;

      this.usuarioService.lista = true;
      this.usuarioService.contador++;

      this.usuarioService.usuario.push({nome:this.nome, email:this.email, tel:this.tel, endereco:this.endereco, idade:this.idade, preferencias:this.preferencias});

      this.clearInput();

    } else {
      this.menorIdade = true;
    }
  }
}
