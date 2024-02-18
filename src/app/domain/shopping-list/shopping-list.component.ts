import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoplistService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoplistService.getIngredients();
    this.shoplistService.currentIngredients.subscribe(
      (result: Ingredient[]) => {
        this.ingredients = result;
      }
    )
  }

}
