import { Component } from '@angular/core';
import { NavMenuComponent } from '../../../../Shared/Components/nav-menu/nav-menu.component';
import { HeroComponent } from '../../../../Shared/Components/hero/hero.component';
import { CardRightPicComponent } from '../../../../Shared/Components/card-right-pic/card-right-pic.component';
import { StickyCardsComponent } from '../../../../Shared/Components/sticky-cards/sticky-cards.component';
import { TestComponent } from '../../../../Shared/Components/test/test.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavMenuComponent,
    HeroComponent,
    CardRightPicComponent,
    StickyCardsComponent,
    TestComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
