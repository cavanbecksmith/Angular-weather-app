// ---
// APP
// ---

// -- Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// -- Views
import { HomeView } from './views/home/home.page';
import { AboutView } from './views/about/about.page';

// -- Bootstrap
import { AppComponent } from './app.component';
import { WeatherserviceService } from './service/weatherservice.service';
import { MyHttpInterceptor } from './service/httpinterceptor';



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
  providers: [
    Http, 
    // MyHttpInterceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}