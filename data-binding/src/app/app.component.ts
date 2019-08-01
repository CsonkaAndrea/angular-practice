import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // megjelenik a htmel-ben elemként
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = `angular-practice-001`;
  names: string[] = [
    'pisti',
    'ani',
    'laci'
  ];

  name: string;
  disabled: boolean = false;

  getName(): string {
    return `Bond, James Bond`;
  }

  constructor() {
    this.name = this.name[0];
    setInterval(() => {
      const index: number = Math.floor(Math.random() * this.names.length);
      // this.name = this.names[index];
      //this.disabled = !this.disabled;
    }, 2000);
  }

  setName(name): void {
    this.name = name;
  }
}

