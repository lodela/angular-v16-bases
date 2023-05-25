import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz-character.interface';
import { DBZService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor(public characters: DBZService) {}

  ngOnInit() {}
}
