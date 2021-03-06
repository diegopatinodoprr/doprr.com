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

    trigger('bodyContens', [
      transition(':enter', [
        query('@bodyContens', style({ width: 0, height: 0 }), { optional: true }),
        query('@bodyContens', [
          animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style(
            {
              width: 'calc(100% - 4px)', height: 'calc(100vh - 2px)'
            }))], { optional: true }),
      ])
    ])
  ]

})
export class DoprrBodyComponent implements OnInit, AfterViewInit {
  containers = ['contentInside1', 'contentInside2', 'contentInside3', 'contentInside4', 'contentInside5'];
  @HostBinding('@bodyContens')
  enabled = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {


  }

}
