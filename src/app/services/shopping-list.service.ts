import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredinets: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 15),
    ]
    currentIngredients = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredinets.slice();
    }

    addIngredient(item: Ingredient) {
        this.ingredinets.push(item);
        this.currentIngredients.emit(this.ingredinets.slice());
    }

    addRecipIngredients(ingreds: Ingredient[]) {
        this.ingredinets.push(...ingreds);
        this.currentIngredients.emit(this.ingredinets.slice());
    }
}