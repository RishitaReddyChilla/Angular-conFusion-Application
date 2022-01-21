import { Component, OnInit,Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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
