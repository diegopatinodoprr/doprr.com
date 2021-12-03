import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css'],
})
export class AnimatedButtonComponent {
  @Input()
  logoValue!: string;
  constructor() {
    // this.logoValue = logovalue;
  }
}
