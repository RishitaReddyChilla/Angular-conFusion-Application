import { Component, OnInit,Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    //make sure animation occur when route changes occur
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders!:Leader[];
  errMess!: string;

  constructor(private leaderService:LeaderService,
    @Inject('BaseURL') public BaseURL : string ) { }

  ngOnInit() {
     this.leaderService.getLeaders()
    .subscribe({next:(leaders)=>this.leaders=leaders,
    error: errmess => this.errMess = <any>errmess});
  }

}
