import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnInit {
  @Input() logoValue: string;
  constructor() {
   // this.logoValue = logovalue;
   }

  ngOnInit(): void {
  }

}
