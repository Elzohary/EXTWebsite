import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-right-pic',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-right-pic.component.html',
  styleUrl: './card-right-pic.component.scss'
})
export class CardRightPicComponent {

  @Input() cardTitle : string = '';
  @Input() title : string = '';
  @Input() paragraph : string = '';
  @Input() CTA : string = '';
  @Input() image: string ='';
  @Input() imagePosition: 'left' | 'right' = 'right'; 

}
