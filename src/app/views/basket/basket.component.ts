import { Component, computed, inject, input } from '@angular/core';
import { BasketIngredientsListComponent } from "./components/basket-ingredients/basket-ingredients-list.component";
import { CartService } from 'app/shared/services/cart.service';

@Component({
  selector: 'app-basket',
  imports: [BasketIngredientsListComponent],
  template: `
    <app-basket-ingredients-list [ingredientList]="ingredientList()" class="card"/>
  `,
  styles:`
  :host{
  
    flex: 1 1 auto;
    padding : 24px;
    
    

  }`
})
export class BasketComponent {
cartService = inject(CartService);
ingredientList = computed(()=> this.cartService.ingredients());
}
