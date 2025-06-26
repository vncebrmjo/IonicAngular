import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService{
private mockMode = false;

constructor(private http: HttpClient) { }

getWeather(city: string): Observable<WeatherResponse> {
    if(this.mockMode){
        return this.http.get<WeatherResponse>('assets/mock-data/weather-sample.json');

    } else {
        const apiKey = environment.weatherApiKey;
        return this.http.get<WeatherResponse>(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

    }

}


}



