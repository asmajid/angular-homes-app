import { HousingLocationData } from './../housing-location-data';
import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: HousingLocation[]
  filteredLocationList:HousingLocation[]

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousinLocation()
    this.filteredLocationList = this.housingLocationList
  }


  filterResults(text:string) {
    if (!text) this.filteredLocationList = this.housingLocationList
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
