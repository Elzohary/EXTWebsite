import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FocusStickyCardsService } from '../../Services/focus-sticky-cards.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sticky-cards.component.html',
  styleUrl: './sticky-cards.component.scss'
})
export class StickyCardsComponent implements OnInit {
  sharedData$!: Observable<boolean>;

  constructor(public isInViewService : FocusStickyCardsService) {}

  ngOnInit(): void {
    this.sharedData$ = this.isInViewService.sharedData$;
  }
}
