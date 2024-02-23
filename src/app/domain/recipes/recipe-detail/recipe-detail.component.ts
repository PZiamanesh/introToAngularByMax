import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.recipeId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (routeParams: Params) => {
        this.recipeId = +routeParams['id'];
        this.recipeItem = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  onToShoppingClicked() {
    this.recipeService.takeIngredients(this.recipeItem.ingredients)
  }

}
