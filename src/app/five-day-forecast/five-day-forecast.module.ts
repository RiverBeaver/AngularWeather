import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortFiveDayForecastComponent } from './short-five-day-forecast/short-five-day-forecast.component';
import { FiveDayForecastComponent } from './five-day-forecast.component';
import { TodayModule } from '../today/today.module';



@NgModule({
  declarations: [
    FiveDayForecastComponent,
    ShortFiveDayForecastComponent,
  ],
  imports: [
    CommonModule,
    TodayModule
  ]
})
export class FiveDayForecastModule { }
