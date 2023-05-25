import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'dbz-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.scss'],
})
export class AddCharacterFormComponent implements OnInit {
  @Output()
  public emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  private uniqueId: string = '';
  public character: Character = {
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam voluptatibus qui. Corporis sunt totam, facilis sit, optio inventore, velit delectus dolorem veritatis eum ea odit? Repellat inventore saepe aperiam?',
    id: '',
    name: 'Ing. Norberto Lodela',
    picture:
      'https://yt3.googleusercontent.com/GgSiNG9H1S8NgSW2zjqV0zATf9-d6DOAsaie1JSRbh0JgJyQxDoB12VGnS_3SzQpJwaVigEW=s176-c-k-c0x00ffffff-no-rj',
    power: 1000,
  };

  onSubmit() {
    this.emitNewCharacter.emit(this.character);
    this.character = {
      bio: '',
      id: window.crypto.randomUUID(),
      name: '',
      picture: '',
      power: 0,
    };
  }

  constructor() {}

  ngOnInit(): void {
    this.character.id = window.crypto.randomUUID();
    console.log(this.uniqueId);
  }
}
