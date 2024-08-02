import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
//import { SideNavToggleBtnComponent } from '../side-nav-toggle-btn/side-nav-toggle-btn.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    //SideNavToggleBtnComponent,
    MatToolbarModule
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

}
