import { Component, Injectable } from '@angular/core';
import { WeatherserviceService } from '../../service/weatherservice.service';

@Component({
  // selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeView {

    location="";

  	constructor(public messageservice: WeatherserviceService){}

  	printTest(){
  		console.log(this);
  	}

  	ngOnInit(){
  		console.log(this.messageservice.loadData('London'));
  	}

    submit(e){
      let data = this.messageservice.loadData(this.location);
      console.log(data);
      if(data === false){
        alert('Please put a location in the input box');
      }
    }

	GetWeather(){
		let appID = "bdd9dca01d94a7b3393615f66232b0d1";
		let apiRoot ="api.openweathermap.org/data/2.5/weather?q=London";
		let url = `${apiRoot}`;
	}

}