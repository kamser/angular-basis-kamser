import { Injectable } from '@angular/core';
import { Personaje } from '../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Array<Personaje> = [];

  get personajes(): Array<Personaje>{
    return [...this._personajes];
  }

  constructor() { }

  addCharacter(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
