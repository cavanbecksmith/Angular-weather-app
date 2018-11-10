// ---
// APP
// ---

// -- Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// -- Views
import { HomeView } from './views/home/home.page';
import { AboutView } from './views/about/about.page';
import { LoginView } from './views/login/login.page';
import { ProfileView } from './views/profile/profile.page';

// -- Bootstrap
import { AppComponent } from './app.component';

// -- Router
import { RouterModule, Routes } from '@angular/router';

// -- Components


// --- Form
import { ReactiveFormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
