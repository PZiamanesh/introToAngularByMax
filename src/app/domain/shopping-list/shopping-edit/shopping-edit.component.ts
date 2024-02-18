import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoplistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onItemClick() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;
    const item = new Ingredient(name, amount);
    this.shoplistService.addIngredient(item);
  }

}
