import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz-character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public dbzCharactersList: Character[] = [
    {
      id: '1234567890-a',
      name: 'Goku',
      power: 10000,
      bio: 'Goku is the main protagonist of the Dragon Ball franchise. He is a Saiyan warrior who was sent to Earth as a baby after his home planet was destroyed. Goku is a kind and gentle soul who loves to fight and protect those he cares about.',
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Goku_DBZ_Artwork.jpg/220px-Goku_DBZ_Artwork.jpg',
    },
    {
      id: '9876543210-b',
      name: 'Vegeta',
      power: 8000,
      bio: "Vegeta is a Saiyan prince who is Goku's rival. Vegeta is a proud and arrogant warrior who is always looking to prove himself. However, he is also a skilled fighter and a loyal friend.",
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Vegeta_DBZ_Artwork.jpg/220px-Vegeta_DBZ_Artwork.jpg',
    },
    {
      id: '0987654321-c',
      name: 'Gohan',
      power: 7000,
      bio: "Gohan is Goku's son and the half-Saiyan, half-human hybrid. Gohan is a brilliant student who is also a skilled fighter. He is often reluctant to fight, but he always comes through when his friends and family are in danger.",
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Gohan_DBZ_Artwork.jpg/220px-Gohan_DBZ_Artwork.jpg',
    },
    {
      id: '9087654321-d',
      name: 'Piccolo',
      power: 6000,
      bio: "Piccolo is a Namekian warrior who is Gohan's adoptive father. Piccolo is a wise and powerful warrior who is always willing to help those in need.",
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Piccolo_DBZ_Artwork.jpg/220px-Piccolo_DBZ_Artwork.jpg',
    },
    {
      id: '876543210-e',
      name: 'Krillin',
      power: 5000,
      bio: "Krillin is Goku's best friend and a skilled martial artist. Krillin is often the comic relief of the group, but he is also a brave and loyal friend.",
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Krillin_DBZ_Artwork.jpg/220px-Krillin_DBZ_Artwork.jpg',
    },
  ];

  handleNewCharacter(e: Character): void {
    this.dbzCharactersList = [...this.dbzCharactersList, e];
  }
  handleDeleteCharacterById(e: string): void {
    this.dbzCharactersList = this.dbzCharactersList.filter(
      (character) => character.id !== e
    );
  }
  constructor() {}

  ngOnInit() {}
}
