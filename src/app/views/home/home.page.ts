import { Component, Injectable } from '@angular/core';
// import {MyService} from '../../shared/WeatherService.service.js';

@Component({
  // selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeView {
	test="Something";
  // title = 'my-app';
  	printTest(){
  		console.log(this._WeatherserviceService);
  		// alert('The input says: '+this.test);
  		// this.GetWeather();
  	}

	GetWeather(){
		const HTTP = new WeakMap();
		HTTP.set(this, $http);
		let appID = "bdd9dca01d94a7b3393615f66232b0d1";
		let apiRoot ="api.openweathermap.org/data/2.5/weather?q=London";
		let url = `${apiRoot}`;
		// this.http.get(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
		console.log('tTHISDhis',this.http);
	}

}

// class GetWeatherAPI {
// 	appID = "bdd9dca01d94a7b3393615f66232b0d1";
// 	apiRoot ="api.openweathermap.org/data/2.5/weather?q=London";
// 	getData() {
// 	  console.log("POST");
// 	  let url = `${this.apiRoot}`;
// 	  this.http.get(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
// 	}
// }