import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  constructor() {}
  visible = true;
  ngOnInit(): void {}
  public hide() {
    this.visible = false;
    console.log('hide intro');
  }
}
