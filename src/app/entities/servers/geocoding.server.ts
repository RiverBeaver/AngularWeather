import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs'

@Injectable()
export class GeocodingService{
    private latitude = 53.91;
    private longitude = 27.68;
    private appid = 'b4c3ff650657c888643bfe6a5e92b942';
    public city = new Subject<string>();
    public cityName = 'Minsk';
    public doesCityExist = true;

    constructor(
        private http: HttpClient,
        private router: Router){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(potision => {
                this.latitude = potision.coords.latitude;
                this.longitude = potision.coords.longitude;
                const sub = this.getCityObserbel().subscribe({
                    next: (response) => {
                    this.city.next((response as Array<any>)[0].name);
                    this.cityName = (response as Array<any>)[0].name;
                    sub.unsubscribe();
                }})
            })
        }
    }

    get getLatitude() : number {
        return this.latitude;
    }

    get getLongitude() : number {
        return this.longitude;
    }   
      
    public getCityObserbel(): Observable<any> {
        return this.http.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${this.latitude}&lon=${this.longitude}&limit=1&appid=${this.appid}`);
    }

    public setCoordinates(cityName: string): void {
        const sub = this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.appid}`).subscribe((response) => {
            if ((response as Array<any>).length) {
                this.latitude = (response as Array<any>)[0].lat;
                this.longitude = (response as Array<any>)[0].lon;
                this.city.next(cityName);
                this.cityName = cityName;
                this.doesCityExist = true;
                this.router.navigate(['today']);
            }
            else {
                this.cityName = cityName;
                this.doesCityExist = false;
                this.city.next(cityName);
                this.router.navigate(['error404']);
            }
            sub.unsubscribe();
        });
    }

    public getCities(cityName: string): {}[] {
        let arrayCities: {}[] = [];
        this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=100&appid=b4c3ff650657c888643bfe6a5e92b942`).subscribe((response) => {
            arrayCities = (response as Array<any>);
        });

        return arrayCities;
    }
}