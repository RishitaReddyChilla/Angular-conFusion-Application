import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',//it will form a tag to be use
  //use this in app.component.html file
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  dishes!: Dish[];
  //selectedDish: Dish = DISHES[0];
  selectedDish!: Dish;
  constructor(private dishService: DishService) { }

  ngOnInit(){
    this.dishService.getDishes()//returning immediately
      .then((dishes) => this.dishes = dishes);

  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
