import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherserviceService {
	apiKey = "&appid=bdd9dca01d94a7b3393615f66232b0d1";
	apiRoot ="https://api.openweathermap.org/data/2.5/weather?q=";
	units = "&units=metric";

	constructor(private http: HttpClient) {}

	loadData(q){
		if(q){
			let data = this.http.get(this.apiRoot+q+this.apiKey+this.units)
		    .subscribe(resp => {
		    	console.log('Weather service resp: ', resp);
		    	return resp;
		    });
		    // return data;

		}
		else{
			return false;
		}
	}
}
