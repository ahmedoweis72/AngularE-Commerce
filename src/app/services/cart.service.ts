import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private counter = new BehaviorSubject<number>(0);
  constructor() {}

  getCounterOfCart(){
    return this.counter.asObservable();
  }

  setCounterOfCart(newCounterVal : number){
    this.counter.next(newCounterVal);
  }
}
