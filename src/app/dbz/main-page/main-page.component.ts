import { Component } from '@angular/core';
import { Personaje } from '../models/model.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personaje: Personaje = {
    name: '',
    power: 0
  };

  constructor(){}

  //Se crea la funcion que recibe el evento desde el hijo que trae la info (4)   // old version
  /*addNewCharacterToList(args: Personaje){
    this.personajes = [...this.personajes, args];

  }*/


}
