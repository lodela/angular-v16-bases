import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  constructor() {}

  get TagsHistory() {
    return [...this._tagHistory];
  }
}
