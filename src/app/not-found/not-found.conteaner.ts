import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { GeocodingService } from "../entities/servers/geocoding.server";

@Component({
    selector: 'not-found-conteaner',
    template: '<not-found [currentCity]="currentCity | async"></not-found>',
  })
  export class NotFoundConteaner {
      public currentCity!: Subject<string>;
  
      constructor(private geocodingService: GeocodingService) {
          this.currentCity = this.geocodingService.city;
      }
  }