import { Component } from '@angular/core';
import { NavMenuComponent } from '../../../../Shared/Components/nav-menu/nav-menu.component';
import { HeroComponent } from '../../../../Shared/Components/hero/hero.component';
import { CardRightPicComponent } from '../../../../Shared/Components/card-right-pic/card-right-pic.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavMenuComponent,
    HeroComponent,
    CardRightPicComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
