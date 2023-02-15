import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title: string = 'bases';
  base: number = 5;
  counter: number = 0;

  acumulate(operator: number){
    this.counter = this.counter + operator;
  }
}
