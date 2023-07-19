import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeocodingService } from '../entities/servers/geocoding.server';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnChanges {
  @Input() currentCity!: string | null;

  public doesCityExist!: boolean;
  
  constructor(private geocodingService: GeocodingService) {
    console.log(this.currentCity);
  }

  public ngOnInit() {
    this.currentCity = this.geocodingService.cityName;
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.doesCityExist = this.geocodingService.doesCityExist;
  }
}
