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

import { PexelsService } from '../../services/pexels.service';
import { Photo } from 'pexels';
import { Router } from '@angular/router';

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
  @HostBinding('@bodyContens')
  enabled = 0;
  constructor(public router: Router, private pexelService: PexelsService) {}
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}
  public getPictureForBackground(theme: string): void {
    this.pexelService.getdata(theme, 100).subscribe((data) => {
      const toTake = Math.floor(100 * Math.random());
      if (data.photos) {
        const newBkg = data.photos[toTake] as Photo;
        if (newBkg?.src) {
          document.body.style.backgroundImage = `url(${newBkg.src.landscape})`;
          this.selected.emit('pictureReady');
        }
      }
    });
  }
}
