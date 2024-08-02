import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    NavMenuComponent
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}