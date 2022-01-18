import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of , lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promise<Promotion[]>{
   const getpromotions$ = of(PROMOTIONS).pipe(delay(2000)); //------3d 
    return lastValueFrom(getpromotions$);
  }

  /*
  // return Promise.resolve(PROMOTIONS); //-without delay //------1st
   //simulate server latency with 2 second delay-short delay
   return new Promise(resolve =>{
    setTimeout(() => resolve(PROMOTIONS),2000); //------2nd
   });
  }*/

  getPromotion(id: string): Promise<Promotion> {
    const getpromotion$ = of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)); //------3d 
    return lastValueFrom(getpromotion$);
  }

  /*
  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]); //-without delay //-----1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]),2000); //-----2nd
    });
  }
  */

  getFeaturedPromotion(): Promise<Promotion> {
    const getfeaturedpromotion$ = of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)); //------3d 
    return lastValueFrom(getfeaturedpromotion$);
  }

  /*
      //return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]); //-without delay //-----1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),2000); //----2nd
    });
  }
  */
}
