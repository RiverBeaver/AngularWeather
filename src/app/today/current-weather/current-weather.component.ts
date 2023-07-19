import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherForecast } from 'src/app/entities/classes/weather-forecast.class';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnChanges {
  @Input() weather!: WeatherForecast | null;
  
  public currentDate!: number;
  public iconUrl!: string;
  public description!: string;

  public temperature!: string;
  public tempFeelsLike!: string;

  public sunrise!: string;
  public sunset!: string;

  constructor(){}
  
  ngOnChanges(changes: SimpleChanges): void {

    if (this.weather) {

      this.currentDate = this.weather.currentWeather.date;
      this.iconUrl = this.weather.currentWeather.icon;
      this.description = this.weather.currentWeather.description;

      this.temperature = this.weather.currentWeather.temperature;  
      this.tempFeelsLike = this.weather.currentWeather.tempFeelsLike;

      this.sunrise = this.weather.currentAstro.sunrise;
      this.sunset = this.weather.currentAstro.sunset;
    }
  }

}
