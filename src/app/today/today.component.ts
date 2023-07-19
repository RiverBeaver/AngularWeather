import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GeocodingService } from '../entities/servers/geocoding.server';
import { WeatherService } from '../entities/servers/weather.server';
import { Router } from '@angular/router';
import { WeatherForecast } from '../entities/classes/weather-forecast.class';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent  implements OnDestroy {

  public weather!: Observable<WeatherForecast> | null;
  private subscription!: Subscription;

  constructor(
    private geocodingService: GeocodingService, 
    private weatherService: WeatherService,
    private router: Router) {
      
    if (!this.geocodingService.doesCityExist) this.router.navigate(['error']);

      this.subscription = this.weatherService.weather.subscribe({
        next: (response) => {
          this.weather = response;
        }
      });
      
      this.geocodingService.city.next(this.geocodingService.cityName);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
