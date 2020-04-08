import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('fisrt recipe','description test 1','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
    new Recipe('second recipe','description test 2 ','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
