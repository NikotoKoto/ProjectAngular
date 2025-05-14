import { Component, computed, inject, input } from '@angular/core';
import { CartService } from 'app/shared/services/cart.service';

@Component({
  selector: 'app-basket-ingredients-list',
  imports: [],
  template: `
    <h2>Liste des ingredients</h2>
    <ul>
      @for(ingredient of ingredientDisplay(); track $index){
      <li>{{ingredient[1]}} x {{ ingredient[0] }}</li>
      }@empty {
      <p>Pas d'ingredient dans le panier</p>
      }
    </ul>
  `,
  styles: `
  :host{
    display:block;
  }`,
})
export class BasketIngredientsListComponent {
  ingredientList = input<string[]>([]);
  ingredientDisplay = computed(() =>
    Object.entries(
      this.ingredientList().reduce((acc, i) => {
        if (acc[i]) {
          acc[i]++;
        } else {
          acc[i] = 1;
        }
        return acc;
      }, {} as { [s: string]: number })
    )
  );
}
