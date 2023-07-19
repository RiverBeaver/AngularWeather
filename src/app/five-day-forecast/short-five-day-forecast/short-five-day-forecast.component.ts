import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { WeatherForecast } from 'src/app/entities/classes/weather-forecast.class';
import { Weather } from 'src/app/entities/classes/weather.class';

@Component({
  selector: 'short-five-day-forecast',
  templateUrl: './short-five-day-forecast.component.html',
  styleUrls: ['./short-five-day-forecast.component.scss']
})
export class ShortFiveDayForecastComponent {
  @Input() weather!: WeatherForecast | null;
  @Output() onChangedSelectedDay = new EventEmitter<number>();

  public days!: Weather[];
  public todayOrTonight!: string;
  public currentIcon!: string;
  public currentTemp!: string;
  public currentStatus!: string;
  public indexOfSelectedDay = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.weather) {
      this.days = this.weather.averagedForecastDays;

      const lastUpdatedEpoch = new Date(this.weather.currentWeather.date)
      this.todayOrTonight = lastUpdatedEpoch.getHours() > 18 ? 'tonight' : 'today';
      this.currentIcon = this.weather.currentWeather.icon;
      this.currentTemp = this.weather.currentWeather.temperature;
      this.currentStatus = this.weather.currentWeather.description;
    }
  }

  public choosingDay(index: number) {
    this.onChangedSelectedDay.emit(index);
    this.indexOfSelectedDay = index;
  }
}
