import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  //recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.recipeService.selectedRecipe.subscribe(
    //   (result: Recipe) => {
    //     this.recipeDetail = result;
    //   })
  }

  // onSelectedRecipe(recipe: Recipe) {
  //   this.recipeDetail = recipe;
  // }

}
