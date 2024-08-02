import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './Pages/Home/Components/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //Following Components are added here while the first phase of development and TO BE REMOVED.
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ExTWebsite';
}
