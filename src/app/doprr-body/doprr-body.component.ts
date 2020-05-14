import { Component, OnInit, HostListener, AfterViewInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-doprr-body',
  templateUrl: './doprr-body.component.html',
  styleUrls: ['./doprr-body.component.css'],
  animations: [
    trigger('appearsToUpLeftSide', [
      transition(':enter', [
        query('@appearsToUpLeftSide', style({ transform: 'translateY(-100px)', opacity: 0 }), { optional: true }),
        query('@appearsToUpLeftSide', style({ transform: 'translateX(-200px)' }), { optional: true }),
        query('@appearsToUpLeftSide', [
          stagger(50, [
            animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'none', opacity: 1 }))])
        ], { optional: true })
      ])
    ]),
    trigger('bodyContens', [
      transition(':enter', [
        query('@bodyContens', style({ width: 0, height: 0 }), { optional: true }),
        query('@bodyContens', [
          animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style(
            {
              width: 'calc(100% - 150px)', height: 'calc(100vh - 150px)'
            }))], { optional: true }),
      ])
    ])
  ]

})
export class DoprrBodyComponent implements OnInit, AfterViewInit {
  containers = ['contentInside1', 'contentInside2', 'contentInside3', 'contentInside4', 'contentInside5'];
  @HostBinding('@appearsToUpLeftSide')
  @HostBinding('@bodyContens')
  enabled = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {


  }

}
