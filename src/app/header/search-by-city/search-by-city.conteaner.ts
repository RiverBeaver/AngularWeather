import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { GeocodingService } from 'src/app/entities/servers/geocoding.server';

@Component({
  selector: 'search-by-city-conteaner',
  template: '<search-by-city [currentCity]="currentCityName | async"></search-by-city>',
})
export class SearchByCityConteaner {
    public currentCityName!: Subject<string>;

    constructor(private geocodingService: GeocodingService) {
        this.currentCityName = this.geocodingService.city
    }
}