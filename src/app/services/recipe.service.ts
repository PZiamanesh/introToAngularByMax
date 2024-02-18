import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../domain/recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[];
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoplistService: ShoppingListService) {
        this.recipes = [
            new Recipe(
                'Shensel', 
                'grand shensel with souce', 
                'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/05/thumb-1200x675.jpg',
                [
                    new Ingredient("Meat", 2),
                    new Ingredient("French Fries", 15),
                    new Ingredient("Lemon", 2),
                ]),
            new Recipe(
                'king burger', 
                'a burger from heaven',
                'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg',
                [
                    new Ingredient("Meat", 2),
                    new Ingredient("Onion", 3),
                    new Ingredient("Souce", 1),
                ]),
        ]
    }

    getRecipes() {
        return this.recipes.slice();
    }

    takeIngredients(ingreds: Ingredient[]) {
        this.shoplistService.addRecipIngredients(ingreds)
    }
}