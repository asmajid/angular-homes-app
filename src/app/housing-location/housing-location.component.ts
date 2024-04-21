import { RouterModule } from '@angular/router';
import { HousingLocation } from './../housing-location';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!:HousingLocation


  ngOnInit(): void {}
}
