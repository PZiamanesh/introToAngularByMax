import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './domain/header/header.component';
import { RecipesComponent } from './domain/recipes/recipes.component';
import { RecipeListComponent } from './domain/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './domain/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './domain/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './domain/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './domain/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './domain/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './domain/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
