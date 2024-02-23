import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];

    constructor(id: number, name: string, desc: string, imagePath: string, ingreds: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingreds;
    }
}