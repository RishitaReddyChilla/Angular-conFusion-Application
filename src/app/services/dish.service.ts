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
    const getdishes$ = of(DISHES).pipe(delay(2000)); //3d 
    return lastValueFrom(getdishes$);
  }
    /* //
    return new Promise(resolve => {
      //without timeout
      //return Promise.resolve(DISHES); //---1st method
      //simulate server latency with 2 second delay-short delay
      //
      setTimeout(()=>resolve(DISHES),2000) //----2nd 
    }
    );
  }*/
  getDish(id: string): Promise<Dish>{
    const getdish$ = of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    return lastValueFrom(getdish$);
  }
   /* //without timeout
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id === id))[0]),2000)
    }
    );
  }*/
   
  getFeaturedDish(): Promise<Dish>{
    const getfeatureddish$ = of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    return lastValueFrom(getfeatureddish$);
    }
    /*//without timeout
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 second delay-short delay
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.featured)[0]),2000)
    }
    );
  }*/
}
