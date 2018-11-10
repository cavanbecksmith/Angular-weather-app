import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeView {
	test="Something";
  // title = 'my-app';
  	printTest(){
  		alert('The input says: '+this.test);
  	}
}
