import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doprr-header',
  templateUrl: './doprr-header.component.html',
  styleUrls: ['./doprr-header.component.css']
})
export class DoprrHeaderComponent implements OnInit {
  doprrAge;
  numyears;
numdays ;
numhours;
numminutes;
numseconds;

  constructor() { }

  ngOnInit(): void {
    const date1 = new Date('10/19/1979');
    const date2 = new Date();
    const diffDays = date2.getTime() - date1.getTime();
    this.secondsToString(diffDays / 1000);
  }
  secondsToString(seconds) {
    this.numyears = Math.floor(seconds / 31536000);
    this.numdays = Math.floor((seconds % 31536000) / 86400);
   
    this.numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) + 1;
    this.numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    this.numseconds =  Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
    // return numyears + ' years ' + numdays + ' days ' + numhours + ' hours ' + numminutes + ' minutes ' + numseconds + ' seconds';

  }

}
