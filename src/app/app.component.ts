import { Component } from '@angular/core';

@Component({//js/ts class
  selector: 'app-root',//see index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//this component is imported into app module
  title = 'conFusion';
}
