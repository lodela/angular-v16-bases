import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz-character.interface';
import { DBZService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor(private dbzService: DBZService) {}

  ngOnInit() {}

  get characters(): Character[] {
    return [...this.dbzService.dbzCharactersList];
  }
  set character(character: Character) {
    this.dbzService.handleNewCharacter(character);
  }

  onDelete(id: string): void {
    this.dbzService.handleDeleteCharacterById(id);
  }
}
