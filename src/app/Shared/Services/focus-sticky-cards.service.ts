import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FocusStickyCardsService {

  isSectionInView: boolean = false;

  private _sharedData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sharedData$: Observable<boolean> = this._sharedData.asObservable();

  constructor() { }

  get sharedData(): boolean {
    return this._sharedData.value;
  }

  set sharedData(value: boolean) {
    this._sharedData.next(value);
  }
}
