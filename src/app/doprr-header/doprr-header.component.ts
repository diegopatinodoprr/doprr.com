import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-doprr-header',
  templateUrl: './doprr-header.component.html',
  styleUrls: ['./doprr-header.component.css']
})
export class DoprrHeaderComponent implements OnInit, AfterViewInit {
  numyears;
  numdays;
  numhours;
  numminutes;
  numseconds;
  private cx: CanvasRenderingContext2D;
  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width = 100;
  @Input() public height = 100;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeCanvas(this.canvas.nativeElement);
   }

  constructor() {
  }

  ngOnInit(): void {
    this.calculateYearsOld();
    this.width = window.innerWidth * 0.99;

  }


  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.resizeCanvas(this.canvas.nativeElement);
    this.cx = canvasEl.getContext('2d');
    this.cx.lineWidth = 1;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = this.getRandomColor();
    this.captureEvents(canvasEl);

  }
  resizeCanvas(canvas: HTMLCanvasElement){
    canvas.width   = window.innerWidth * 0.99;
    canvas.height = this.height;
  }
  getRandomColor() {
    const flor255 = Math.floor(Math.random() * 16);
    return 'rgba(0,' + Math.floor(255 - 42.5 * flor255) + ',' + Math.floor(255 - 42.5 * flor255) + ',50)';
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              pairwise()
            );
        })
      ).subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    this.cx.beginPath();
    this.cx.strokeStyle = this.getRandomColor();
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }


  calculateYearsOld() {
    const date1 = new Date('10/19/1979');
    const date2 = new Date();
    const diffDays = date2.getTime() - date1.getTime();
    this.secondsToString(diffDays / 1000);
    const self = this;
    setTimeout(() => {
      self.calculateYearsOld();
    }, 1000 * 60);
  }

  secondsToString(seconds) {
    this.numyears = Math.floor(seconds / 31536000);
    this.numdays = Math.floor((seconds % 31536000) / 86400);

    this.numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) + 1;
    this.numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    this.numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
    // return numyears + ' years ' + numdays + ' days ' + numhours + ' hours ' + numminutes + ' minutes ' + numseconds + ' seconds';

  }

}
