import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GeocodingService } from './geocoding.server';
import { map, Observable, Subject } from 'rxjs';
import { WeatherForecast } from '../classes/weather-forecast.class';

@Injectable()
export class WeatherService{
    public weather = new Subject<Observable<WeatherForecast> | null>();
    private appid = '185b72588f7541d2b70162128231607';

    constructor(private http: HttpClient, private geocodingService: GeocodingService) {
        this.geocodingService.city.subscribe({
            next: () => {
                this.weather.next(this.getWeather);
            }
        })
    }

    get getWeather(): Observable<WeatherForecast> | null {
        if (this.geocodingService.getLatitude) {
            return this.http.get(`http://api.weatherapi.com/v1/forecast.json?q=${this.geocodingService.getLatitude},${this.geocodingService.getLongitude}&days=5&key=${this.appid}`).pipe(
                map((response: any) => {
                    return new WeatherForecast(response);
                })
            )       
        }
        return null;
    }
}