import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() receipItem: Recipe;

  constructor(private recipSrv: RecipeService) { }

  ngOnInit(): void {
    console.log(this.receipItem)
  }

  onToShoppingClicked() {
    this.recipSrv.takeIngredients(this.receipItem.ingredients)
  }

}
