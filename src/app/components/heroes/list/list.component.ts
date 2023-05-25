import { Component } from '@angular/core';
import { Hero } from '../../../interfaces/hero/hero.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Captain America',
      powers: ['Strength', 'Durability', 'Leadership'],
      biography:
        'Steve Rogers was a frail young man who volunteered for a top-secret experimental program that transformed him into Captain America, a symbol of hope and inspiration to the Allied forces.',
    },
    {
      id: 2,
      name: 'Iron Man',
      powers: ['Genius intellect', 'Technology', 'Flight'],
      biography:
        'Tony Stark was a brilliant but arrogant industrialist who was captured by terrorists and forced to build a weapon of mass destruction. Instead, he built a suit of armor that he used to escape and become Iron Man, a superhero who fights for justice.',
    },
    {
      id: 3,
      name: 'Thor',
      powers: ['Superhuman strength', 'Lightning', 'Flight'],
      biography:
        'Thor is the Asgardian god of thunder and lightning. He is a powerful warrior who fights for good alongside the Avengers.',
    },
    {
      id: 4,
      name: 'Hulk',
      powers: ['Superhuman strength', 'Invulnerability', 'Regeneration'],
      biography:
        'Bruce Banner is a brilliant scientist who was exposed to a gamma ray blast that turned him into the Hulk, a massive and powerful creature who often loses control of his anger.',
    },
    {
      id: 5,
      name: 'Black Widow',
      powers: ['Martial arts', 'Expert marksmanship', 'Stealth'],
      biography:
        'Natasha Romanoff is a former Russian spy who defected to the United States and became a member of the Avengers. She is a skilled martial artist and an expert in hand-to-hand combat.',
    },
  ];
  handleDelete(id: number): void {
    this.heroes = this.heroes.filter((item) => item.id !== id);
  }
}
