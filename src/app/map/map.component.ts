import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as leaflet from 'leaflet'

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Input() longitude!:number|undefined
  @Input() latitude!:number|undefined

  ngOnInit(): void {
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.initializeMap(this.latitude, this.longitude)
    }
  }

   initializeMap(latitude: number, longitude: number): void {
    const map = leaflet.map('map').setView([latitude, longitude], 10)
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  }



}
