import { Component, computed, signal } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './components/cocktails-details/cocktails-details.component';
import { Cocktail } from 'app/shared/interfaces';
import { cocktails } from 'app/shared/data';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CocktailsListComponent, CocktailsDetailsComponent],
  template: `
    <app-cocktails-list
      (selectCocktail)="selectCocktail($event)"
      [selectedCocktailName]="selectedCocktailName()"
      [cocktails]="cocktails()"
      class="w-half card xs-w-full"
    />
    @if(selectedCocktail()){
      <app-cocktails-details class="w-half xs-w-full card" [cocktail]="selectedCocktail()"/>
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
  cocktails = signal<Cocktail[]>([]);
  selectedCocktail = signal<Cocktail>(this.cocktails()[0]);
  selectedCocktailName = computed(() => this.selectedCocktail()?.title)
  selectCocktail(cocktailName: string) {
    console.log(cocktailName);
    const newCocktail = this.cocktails().find(
      ({ title }) => title === cocktailName
    );
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }
}
