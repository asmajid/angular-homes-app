import { CommonModule } from '@angular/common';
import { HousingLocation } from './../housing-location';
import { HousingService } from './../housing.service';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  housingLocationId = 0
  housingLocation!: HousingLocation|undefined



  constructor(private route: ActivatedRoute, private housingService:HousingService) {
    this.housingLocationId =  +this.route.snapshot.params['id'];
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  }

}
