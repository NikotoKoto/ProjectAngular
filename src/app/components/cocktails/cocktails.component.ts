import { Component, computed, inject, signal } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './components/cocktails-details/cocktails-details.component';
import { Cocktail } from 'app/shared/interfaces';
import { cocktails } from 'app/shared/data';
import { CocktailsService } from 'app/shared/services/cocktails.service';
import { CartService } from 'app/shared/services/cart.service';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailsDetailsComponent],
  template: `
    <app-cocktails-list 
    [(selectedCocktailId)]="selectedCocktailId"
    [likedCocktailsID]="likedCocktailsID()"
    (likeCocktails)="likeCocktails($event)"
    (unlikeCocktails)="unlikeCocktails($event)" 
    [cocktails]="cocktails()"
    class="w-half card xs-w-full"/> 
    @let sc = selectedCocktail(); @if(sc){
    <app-cocktails-details
      (likeCocktails)="likeCocktails($event)"
      (unlikeCocktails)="unlikeCocktails($event)"
      [isLiked]="selectedCocktailIsLiked()"
      class="w-half xs-w-full card"
      [cocktail]="sc"
    />
    }
  `,
  styles: `:host{
      display: flex;
      gap: 24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
       flex-direction: column; 
    }
  }
      `,
})
export class CocktailsComponent {
  cocktailsService = inject(CocktailsService);
  cartService = inject(CartService);
  cocktails = computed(
    () => this.cocktailsService.cocktailsResource.value() || []
  );

  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(() =>
    this.cocktails().find(
      (cocktail) => cocktail._id === this.selectedCocktailId()
    )
  );
  selectedCocktailIsLiked = computed(() => {
    const selectedCocktailId = this.selectedCocktailId();
    return selectedCocktailId
      ? this.likedCocktailsID().includes(selectedCocktailId)
      : false;
  });

  likedCocktailsID = computed(() => this.cartService.likedCocktailsId());
  unlikeCocktails(cocktailID: string) {
    this.cartService.unlikeCocktail(cocktailID);
  }

  likeCocktails(CocktailID: string) {
    this.cartService.likeCocktail(CocktailID);
  }
}
