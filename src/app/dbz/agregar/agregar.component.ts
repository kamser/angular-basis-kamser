import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../models/model.interface';
import { DbzService } from '../services/dbz-service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input('nuevoPersonaje') personaje: Personaje = {
    name: '',
    power: 0
  };

  //Para pasar un valor al padre generado desde el hijo: (1)
  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();   //old version

  /*add(): void{   OLD version
    // Despues se toma el evento que se crea y se emite hacia afuera (2) al componente padre
    this.onNewCharacter.emit(this.personaje);
    this.personaje = {name: '', power: 0};
  }*/


  constructor(private dbzService: DbzService){}

  addCharacter(): void{
    this.dbzService.addCharacter(this.personaje);
    this.personaje = {name: '', power: 0};
  }

}
