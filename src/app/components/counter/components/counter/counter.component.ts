import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="handleClick(+1)">+ 1</button>
    <button (click)="handleClick()">Reset</button>
    <button (click)="handleClick(-1)">- 1</button>
    <p>Counter: {{ counter }}</p>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  handleClick(n?: number): void {
    this.counter = n ? (this.counter += n) : 10;
  }
  constructor() {}
}
