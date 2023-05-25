import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  @Input('characters') characters: Character[] = [];
  @Output()
  private handleDeleteCharacter: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  handleDelete(id: string): void {
    this.handleDeleteCharacter.emit(id);
  }
}
