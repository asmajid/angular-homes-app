
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  housingLocationId = 0



  constructor(private route: ActivatedRoute) {
    this.housingLocationId =  +this.route.snapshot.params['id'];
  }

}
