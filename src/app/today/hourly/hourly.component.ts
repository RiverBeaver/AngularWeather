import { AfterViewChecked, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherForecast } from 'src/app/entities/classes/weather-forecast.class';
import { Weather } from 'src/app/entities/classes/weather.class';

@Component({
  selector: 'hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements AfterViewChecked, OnChanges {
  @Input() weather!: WeatherForecast | null;
  @Input() indexOfSelectedDay = 0;

  public selectedDay!: number;
  public hours!: Weather[];
  public currentHour!: number;

  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.weather) {

      this.selectedDay = this.weather.forecastDays[this.indexOfSelectedDay][0].date;
      this.hours = this.weather.forecastDays[this.indexOfSelectedDay];

      if (this.indexOfSelectedDay + 1 < 5) {
        this.hours.push(this.weather.forecastDays[this.indexOfSelectedDay + 1][0]);
      }

      this.currentHour = new Date(this.weather.currentWeather.date).getHours();
    }
  }
  
  ngAfterViewChecked(): void {
    if (this.indexOfSelectedDay) return;
    let elem = document.querySelector('.target-scroll');
    elem?.scrollIntoView({
      behavior: "auto",
      inline: "start"
    });
    elem = document.querySelector('h1');
    elem?.scrollIntoView({
      behavior: "auto",
      inline: "start"
    });
  }

  // public click(event: Event) {
  //   console.log(event)
  // }
}
