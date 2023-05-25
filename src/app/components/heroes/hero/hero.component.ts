import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  handleCambiarNombre() {
    this.name = 'norberto';
  }
}
