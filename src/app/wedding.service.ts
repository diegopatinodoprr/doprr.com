import { Injectable } from '@angular/core';
import * as data from '../assets/weddingData/weddingData.json';
@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  json: any = data;
  activities: Array<string> = ['Bogota', 'Mairie', 'A2', 'Dco_Salle', 'Family', 'Photobooth', 'Fiesta', 'Prepa', 'Rita_photos', 'Vin'];
  constructor() {

   }
   getActivities(): Array<string>{
     return this.activities;
   }
  getWeddingData() {
    return this.json;
  }

}
