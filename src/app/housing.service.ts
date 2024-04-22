import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingLocationData } from './housing-location-data';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocations: HousingLocation[] = HousingLocationData

  constructor() { }

  getAllHousinLocation():HousingLocation[]{
   return this.housingLocations
  }

  getHousingLocationById(id:number):HousingLocation | undefined{
    return this.housingLocations.find(housingLocation =>{
      return housingLocation.id === id
    })
  }

  sendApplication(firstName:string, lastName:string, email:string) {
    console.log(firstName, lastName, email);
  }
}
