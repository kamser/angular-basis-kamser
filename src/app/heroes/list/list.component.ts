import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: Array<string> = ['Spiderman', 'Batman', 'Superman', 'Poisson Ive', 'Joker'];
  deletedHero: string = '';

  deleteHero(): void{
    this.deletedHero = this.heroes[this.heroes.length-1];
    this.heroes = [...this.heroes.slice(0, this.heroes.length-1)];
  }

}
