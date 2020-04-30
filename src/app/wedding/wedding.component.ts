import { Component, OnInit } from '@angular/core';
import { WeddingService } from '../wedding.service';


@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  bogota;
  france;
  activities;
  constructor(private weddingService: WeddingService) { }

  ngOnInit(): void {
    this.activities = this.weddingService.getActivities();

  }
}
