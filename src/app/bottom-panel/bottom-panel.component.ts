import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css'],
  animations: [
    trigger('openClose', [
      state('close', style({
        height: 0
      })),
      state('open', style({
        height: '32px'
      })),
      transition('open => close', [
        animate('1s ease-in-out')
      ]),
      transition('close => open', [
        animate('1s ease-in-out')
      ])
    ]),



    trigger('appearshide', [
      state('appears', style({
        transform: 'translateX(100%)',
        position: 'absolute', left: '50%', right: 0
      })),
      state('hide', style({
        transform: 'translateX(0%)',
        position: 'absolute',
        left: 0,
        right: 0,
      })
      ),
      transition('appears => hide', [
        animate('1s ease-in-out')
      ]),
      transition('hide => appears', [
        animate('1s ease-in-out')
      ])
    ])
  ]

})
export class BottomPanelComponent implements OnInit {
  isHide = true;
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.isHide = !this.isHide;
  }
  openClose() {
    this.isOpen = !this.isOpen;
  }

}
