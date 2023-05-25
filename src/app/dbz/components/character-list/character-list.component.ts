import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  @Input('characters') characters: Character[] = [];

  ngOnInit() {}
}
