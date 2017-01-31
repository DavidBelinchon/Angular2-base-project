import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <navbar></navbar>
	<!-- {{title}} -->
  	<router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'app works!';
}

