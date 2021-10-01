import { Injectable } from '@angular/core';

interface users {
  nome:         string;
  email:        string;
  tel:          string;
  endereco:     string;
  idade:        number;
  preferencias: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  lista: boolean = true;
  contador: number = 0;
  usuario: users[] = [];

  constructor() { }
}
