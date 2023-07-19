import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HourlyComponent } from './hourly/hourly.component';



@NgModule({
  declarations: [
    TodayComponent,
    CurrentWeatherComponent,
    HourlyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HourlyComponent
  ]
})
export class TodayModule { }
