import { Weather } from "./weather.class";

export class WeatherForecast {
    public currentWeather!: Weather;
    public currentAstro!: {sunrise: string, sunset: string};
    public forecastDays: Weather[][] = [];
    public averagedForecastDays: Weather[] = [];

    constructor(weatherFromWeatherapi: any) {
        this.currentWeather = new Weather(
            weatherFromWeatherapi.current.last_updated_epoch * 1000,
            weatherFromWeatherapi.current.condition.icon,
            weatherFromWeatherapi.current.condition.text,
            weatherFromWeatherapi.current.temp_c,
            weatherFromWeatherapi.current.feelslike_c,
            weatherFromWeatherapi.current.wind_kph,
            weatherFromWeatherapi.current.wind_dir,
        );

        this.currentAstro = {
            sunrise: weatherFromWeatherapi.forecast.forecastday[0].astro.sunrise,
            sunset: weatherFromWeatherapi.forecast.forecastday[0].astro.sunset,
        };

        for (let day of weatherFromWeatherapi.forecast.forecastday) {
            const temporaryArray: Weather[] = [];

            for (let hour of day.hour) {
                temporaryArray.push(new Weather(
                    hour.time_epoch * 1000,
                    hour.condition.icon,
                    hour.condition.text,
                    hour.temp_c,
                    hour.feelslike_c,
                    hour.wind_kph,
                    hour.wind_dir,
                ));
            }

            this.forecastDays.push(temporaryArray);
        }

        for (let day of weatherFromWeatherapi.forecast.forecastday) {
            this.averagedForecastDays.push(
                new Weather(
                    day.date_epoch * 1000,
                    day.day.condition.icon,
                    day.day.condition.text,
                    day.day.maxtemp_c,
                    day.day.maxtemp_c,
                    day.day.maxwind_kph,
                    ''
                ));  
        }
    }
}