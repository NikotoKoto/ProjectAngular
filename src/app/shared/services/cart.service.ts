import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  likedCocktailsId = signal<string[]>([]);

  ingredients = signal<string[]>([]);
  constructor() {}

  likeCocktail(cocktailID: string) {
    this.likedCocktailsId.update((likedCocktails) => [
      ...likedCocktails,
      cocktailID,
    ]);
  }

  unlikeCocktail(cocktailID: string) {
    this.likedCocktailsId.update((likedCocktails) =>
      likedCocktails.filter((c) => c !== cocktailID)
    );
  }

  addIngredients(ingredients : string[]){
    this.ingredients.update(ingredient => [...ingredient, ...ingredients])
    console.log(ingredients);
  }
}
