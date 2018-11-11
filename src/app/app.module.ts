// ---
// APP
// ---

// -- Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// -- Views
import { HomeView } from './views/home/home.page';
import { AboutView } from './views/about/about.page';

// -- Bootstrap
import { AppComponent } from './app.component';
import {WeatherserviceService} from './service/weatherservice.service';



const appRoutes: Routes = [
  { path: '', component: HomeView },
  { path: 'about', component: AboutView },
];

@NgModule({
  declarations: [
  	AppComponent,
    HomeView,
    AboutView,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    // WeatherserviceService,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Http],
  bootstrap: [ AppComponent ]
})
export class AppModule {}



// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';
// import {Observable} from 'rxjs/Rx'

// @Injectable({
//   providedIn: 'root',
// })
// export class MyService {
//   constructor(Http) {
//     this.appID="bdd9dca01d94a7b3393615f66232b0d1";
//     this.apiRoot ="api.openweathermap.org/data/2.5/weather?q=London";
//     this.url = `${apiRoot}`;
//   }

//   private extractData(res) {

//     if (res.status < 200 || res.status >= 300) {
//       throw new Error('Bad response status: ' + res.status);
//     }

//     // console.log(res.json());
//     this.serviceData = (res.json());
//     return this.serviceData || {};
//   }

//   loaddata(){
//     return this.http.get(this.server_url) // define a variable server_url to assign the requested url
//       .map(this.extractData);
//   }
// }