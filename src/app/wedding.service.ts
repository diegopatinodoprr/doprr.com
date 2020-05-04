import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as data from '../assets/weddingData/weddingData.json';
import { from, Observable, pipe, Subject } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  json = [];

  activitieData = new Subject<any>();
  activities: Array<string> = ['Bogota', 'Mairie', 'A2', 'Dco_Salle', 'Family', 'Photobooth', 'Fiesta', 'Prepa', 'Rita_photos', 'Vin'];
  constructor() {
  }
  getActivities(): Array<string> {
    return this.activities;
  }
  public activitieChange(activitie: string) {
    this.json = _.chain(data["default"]).filter((value) => value.sd.match(activitie))
      .map((value) => new WeddingPicture(value.sd, value.th)).value();
    this.activitieData.next(this.json);
  }

}

export class WeddingPicture {
  sd;
  th;
  constructor(sd: string, th: string) {
    this.th = th;
    this.sd = sd;

  }
  static fromJson(json: any) {
    return new WeddingPicture(json.sd, json.th);
  }
}
