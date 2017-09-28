import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./styles/app.component.css'],
  template:
  `
    <navbar></navbar>
	<!-- {{title}} -->
	<div class="container-fluid">
  	<router-outlet></router-outlet>
	</div>
	<section class="footer">
		<div class="container-fluid">
			<div class="row">
				<p>
					Miaaaaau!
				</p>
				<br>
			</div>
		</div>
	</section>
  `
})

export class AppComponent {
  title = 'app works!';
}

