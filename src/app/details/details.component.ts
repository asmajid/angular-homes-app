import { CommonModule } from '@angular/common';
import { HousingLocation } from './../housing-location';
import { HousingService } from './../housing.service';

import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplyFormComponent } from '../apply-form/apply-form.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ApplyFormComponent,
    MapComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  housingLocationId = 0
  housingLocation!: HousingLocation|undefined
  showApplyForm:boolean = false
  showMap:boolean = false

  constructor(private route: ActivatedRoute, private housingService:HousingService) {
    this.housingLocationId =  +this.route.snapshot.params['id'];
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  }

  toggleApplyForm() {
    this.showApplyForm = !this.showApplyForm
  }

  toggleMap() {
    this.showMap = !this.showMap
  }

}
