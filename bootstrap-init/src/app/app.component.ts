import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tina';

  heroes: Hero[] = [
    { name: 'Bombasto', address: 'New York', superpower: 'Can explode' },
    { name: 'IceMan', address: 'New York', superpower: 'Can frose' },
    { name: 'Captain Planet', address: 'Budapest', superpower: 'Can save Earth' },
  ];

  selectedHero: Hero = this.heroes[0];

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroChanged(hero: Hero): void {
    console.log('changed Hero: ', hero);
  }
}
