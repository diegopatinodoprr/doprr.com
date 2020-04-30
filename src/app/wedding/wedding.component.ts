import { Component, OnInit } from '@angular/core';
import { WeddingService } from '../wedding.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  activities;
  data;
  constructor(private weddingService: WeddingService) { }

  ngOnInit(): void {
    this.weddingService.activitieData.subscribe((value) => {

      this.data = value;
      console.log(this.data);
    });
    this.activities = this.weddingService.getActivities();
    this.weddingService.activitieChange('bogota');
  }
  onValChange(value) {
    this.weddingService.activitieChange(value);
  }
}
