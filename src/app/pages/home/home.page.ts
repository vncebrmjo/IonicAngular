import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';
import { AppComponent } from "../../app.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherResponse } from 'src/app/models/weather.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonInput, IonItem, IonLabel, IonButton, IonContent, HeaderComponent, FooterComponent, FormsModule,  CommonModule, AppComponent,  HttpClientModule ],
})
export class HomePage implements OnInit {
  weatherData?: WeatherResponse;
  city = '';


  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    console.log('HomePage loaded');
    this.fetchWeather();
  }

  fetchWeather(){
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error('API Error', err),

    })
  }

  onSearchCity() {
  this.fetchWeather();
}
}
