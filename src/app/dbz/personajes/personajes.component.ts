import { Component, Input } from '@angular/core';
import { Personaje } from '../models/model.interface';
import { DbzService } from '../services/dbz-service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input('childData') personajes: Array<Personaje> = [];  //old version

  constructor(private dbzService: DbzService){

  }

  get personajes(): Array<Personaje>{
    return this.dbzService.personajes;
  }

}
