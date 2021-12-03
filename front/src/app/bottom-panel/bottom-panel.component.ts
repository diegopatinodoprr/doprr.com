import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css'],
})
export class BottomPanelComponent {
  isHide = false;
  isOpen = false;
  constructor() {}

  toggle(): void {
    this.isHide = !this.isHide;
  }
  openClose(): void {
    this.isOpen = !this.isOpen;
  }
}
