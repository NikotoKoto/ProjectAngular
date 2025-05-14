import { Component, computed, inject } from '@angular/core';
import { CocktailsService } from 'app/shared/services/cocktails.service';

@Component({
  selector: 'app-admin-cocktails-list',
  imports: [],
  template: `
    <h3 class="mb-20">Listes des Cocktails</h3>
    <ul>
      @for(cocktail of cocktails(); track cocktail._id){
      <li class="flex gap-12 card align-items-center mb-10">
        <span class="flex-auto ">{{ cocktail.title }}</span>
        <button class="btn btn-primary">Editer</button>
        <button (click)="deleteCocktail(cocktail._id)" class="btn btn-danger">Supprimer</button>
      </li>
      }@empty {
      <p>Il n y a pas de cocktail pour le moment</p>
      }
    </ul>
  `,
  host: {
    class: 'card',
  },
  styles: `
  :host{
    margin:10px;
  }
  .card{
    padding:8px;
  }`,
})
export class AdminCocktailsListComponent {
  cocktailService = inject(CocktailsService);
  cocktails = computed(
    () => this.cocktailService.cocktailsResource.value() || []
  );
  deleteCocktail(cocktailId : string){
    this.cocktailService.deleteCocktail(cocktailId)
  }
}
