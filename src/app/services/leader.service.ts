import { Injectable } from '@angular/core';
import { Leader } from '..//shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]>{
    //return Promise.resolve(LEADERS); //-without delay
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS),2000);
    });
  }
  getLeader(id: string):Promise<Leader>{
    //return Promise.resolve(LEADERS.filter((leader)=>leader.name)[0]); //-without delay
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter((leader)=>leader.name)[0]),2000);
    });
  }
  getFeaturedLeader(): Promise<Leader>{
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]); //-without delay
    //simulate server latency with 2 second delay-short delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]),2000);
    });
  }
  
}
