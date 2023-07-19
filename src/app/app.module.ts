import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiveDayForecastModule } from './five-day-forecast/five-day-forecast.module';
import { TodayModule } from './today/today.module';
import { HttpClientModule } from '@angular/common/http';
import { GeocodingService } from './entities/servers/geocoding.server';
import { WeatherService } from './entities/servers/weather.server';
import { NotFoundConteaner } from './not-found/not-found.conteaner';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotFoundConteaner
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    TodayModule,
    FiveDayForecastModule,
    HttpClientModule,
  ],
  providers: [WeatherService, GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
