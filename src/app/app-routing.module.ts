import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./domain/recipes/recipes.component";
import { ShoppingListComponent } from "./domain/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./domain/recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./domain/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./domain/recipes/recipe-edit/recipe-edit.component";

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}