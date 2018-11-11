import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
	appID = "bdd9dca01d94a7b3393615f66232b0d1";
	apiRoot ="api.openweathermap.org/data/2.5/weather?q=London";

  constructor() {

  }

  loadData(){
  	console.log('Data load');
  }
}
