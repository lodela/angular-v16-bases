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

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 25;
  }

  reset() {
    this.name = 'ironman';
    this.age = 45;

    document
      .querySelectorAll('h1')!
      .forEach((el) => (el.innerHTML = '<h1>Hola desde Angular</h1>'));
  }
}
