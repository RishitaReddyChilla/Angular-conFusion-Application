import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of , lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    //return of(DISHES).pipe(delay(2000)).lastValueFrom();
  
    return new Promise(resolve => {
      //without timeout
      //return Promise.resolve(DISHES);
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES),2000)
    }
    );
  }
  getDish(id: string): Promise<Dish>{
   /* //without timeout
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id === id))[0]),2000)
    }
    );
  }*/

  //without timeout
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id === id))[0]),2000)
    }
    );
  }
  getFeaturedDish(): Promise<Dish>{
    /*//without timeout
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.featured)[0]),2000)
    }
    );
  }*/

   //without timeout
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.featured)[0]),2000)
    }
    );
  }
}
