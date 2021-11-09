import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { PexelsService } from '../services/pexels.service';
import { Photo } from 'pexels';

@Component({
  selector: 'app-doprr-body',
  templateUrl: './doprr-body.component.html',
  styleUrls: ['./doprr-body.component.css'],
  animations: [
    trigger('bodyContens', [
      transition(':enter', [
        query('@bodyContens', style({ width: 0, height: 0 }), {
          optional: true,
        }),
        query(
          '@bodyContens',
          [
            animate(
              '1500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({
                width: 'calc(100% - 4px)',
                height: 'calc(100vh - 2px)',
              })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class DoprrBodyComponent implements OnInit {
  containers = [
    'contentInside1',
    'contentInside2',
    'contentInside3',
    'contentInside4',
    'contentInside5',
  ];
  @HostBinding('@bodyContens')
  enabled = 0;
  constructor(private pexelService: PexelsService) {}
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.pexelService.getdata('moto', 100).subscribe((data) => {
      const toTake = Math.floor(100 * Math.random());
      if (data.photos) {
        const newBkg = data.photos[toTake] as Photo;
        if (newBkg?.src) {
          document.body.style.backgroundImage = `url(${newBkg.src.large})`;
          this.selected.emit('pictureReady');
        }
      }
    });
  }
}
