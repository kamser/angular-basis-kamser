import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = "Batman";
  age: number = 12;

  get nameCapitalized(): string{
    return this.name.toUpperCase();
  }

  getHeroInfo(): string{
    return `${this.name} - ${this.age}`;
  }

}
