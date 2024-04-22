import { HousingLocationData } from './../housing-location-data';
import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    HousingLocationComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList!: HousingLocation[]

  constructor(private housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousinLocation()
  }

}
