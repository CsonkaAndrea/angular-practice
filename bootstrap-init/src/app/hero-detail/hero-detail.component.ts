import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../model/hero';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Output() onchange: EventEmitter<Hero> = new EventEmitter();

  ngOnInit() {
  }

  changeTrigger(): void {
    this.onchange.emit(this.hero);
  }

}
