import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient [] = [
   new Ingredient('farine', 120),
   new Ingredient('poudre de cacao', 50)
  ] ;


  constructor() { }

  ngOnInit(): void {
  }

}
