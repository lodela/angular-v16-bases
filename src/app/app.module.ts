import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counter } from './components/counter/counter.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListComponent } from './components/heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, Counter, HeroComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
