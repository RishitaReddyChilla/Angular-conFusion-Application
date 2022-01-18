import { Injectable } from '@angular/core';
import { Leader } from '..//shared/leader';
import { LEADERS } from '../shared/leaders';
import { of , lastValueFrom, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000)); //------4th -- observable
  }

  /*
  //return Promise.resolve(LEADERS); //-without delay ---1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS),2000); //----2nd
    });
  }
  */
 /*
 getLeaders(): Promise<Leader[]>{
    const getleaders$ = of(LEADERS).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getleaders$);
  }
  */


  getLeader(id: string):Observable<Leader>{
    return of(LEADERS.filter((leader)=>leader.name)[0]).pipe(delay(2000)); //------4th -- observable
  }

  /*
  //return Promise.resolve(LEADERS.filter((leader)=>leader.name)[0]); //-without delay  //---1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter((leader)=>leader.name)[0]),2000); //----2nd
    });
  }
  */
 /*
  getLeader(id: string):Promise<Leader>{
    const getleader$ = of(LEADERS.filter((leader)=>leader.name)[0]).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getleader$);
  }
  */


  getFeaturedLeader(): Observable<Leader>{
    return  of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)); //------4th -- observable
  }

  /*
  //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]); //-without delay //---1st
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]),2000); //-----2md
    });
  }
  */
 /*
  getFeaturedLeader(): Promise<Leader>{
    const getfeaturedleader$ = of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)); //------3d return promise from observable
    return lastValueFrom(getfeaturedleader$);
  }
  */
  
}
