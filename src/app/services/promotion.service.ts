import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of , lastValueFrom , Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient ) { }
  getPromotions(): Observable<Promotion[]>{
   //return of(PROMOTIONS).pipe(delay(2000)); //------4th --- observable
   return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  /*
  // return Promise.resolve(PROMOTIONS); //-without delay //------1st
   //simulate server latency with 2 second delay-short delay
   return new Promise(resolve =>{
    setTimeout(() => resolve(PROMOTIONS),2000); //------2nd
   });
  }*/
  /*
   getPromotions(): Promise<Promotion[]>{
   const getpromotions$ = of(PROMOTIONS).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getpromotions$);
  }
  */


  getPromotion(id: string): Observable<Promotion> {
   //return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)); //------4th --- observable
   return this.http.get<Promotion>(baseURL + 'promotions/' + id );
  }

  /*
  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]); //-without delay //-----1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]),2000); //-----2nd
    });
  }
  */
 /*
  getPromotion(id: string): Promise<Promotion> {
    const getpromotion$ = of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getpromotion$);
  }
  */


  getFeaturedPromotion(): Observable<Promotion> {
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)); //------4th -- observable
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }

  /*
      //return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]); //-without delay //-----1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),2000); //----2nd
    });
  }
  */
 /*
 getFeaturedPromotion(): Promise<Promotion> {
    const getfeaturedpromotion$ = of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getfeaturedpromotion$);
  }
  */
}
