import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  constructor() {}
  visible = true;
  theme = '';
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}
  public hide() {
    this.visible = false;
  }
  public themeSelected() {
    this.selected.emit('univers');
  }
}
