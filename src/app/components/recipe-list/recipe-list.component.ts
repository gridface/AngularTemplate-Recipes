import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  title = 'app';
  recipes: Recipe[];

  recipe_in_progress: Recipe;

  constructor() {
    this.recipe_in_progress  = Recipe.createBlank();

    this.recipes = [
      new Recipe('Banana Bread', 'This is my favorite banana bread recipe', 4, 60, null, null, null),
      new Recipe('Homestead Tofu', 'Asian dish from rural Hunan province in China', 4, 60, null, null, null)
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2))
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
}
