import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',//it will form a tag to be use
  //use this in app.component.html file
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  dishes: Dish[] = DISHES;
  //selectedDish: Dish = DISHES[0];
  selectedDish!: Dish;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
