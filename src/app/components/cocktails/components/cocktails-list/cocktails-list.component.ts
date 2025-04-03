import { Cocktail } from 'app/shared/interfaces';
import { cocktails } from './../../../../shared/data/cocktails.data';
import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2 class="mb-20">Listes des Cocktails</h2>
    <input
      [(ngModel)]="filter"
      type="text"
      class="mb-20 w-full input"
      placeholder="Recherche d'un cocktail"
    />
    <ul class="mb-20">
      @for (cocktail of filteredCocktail(); track cocktail.title){

      <li
        (click)="selectCocktail.emit(cocktail.title)"
        [class.active-item]="cocktail.title === selectedCocktailName()"
        [class.text-primary]="cocktail.title === selectedCocktailName()"
        class="px-12 py-6 my-2 radius"
      >
        <h3>{{ cocktail.title }}</h3>
      </li>
      }
    </ul>
    <button class="btn btn-primary" (click)="handleClick()">
      Ajouter un Cocktail
    </button>
  `,
  styles: `
  li:hover {
    cursor: pointer;
  background-color: var(--light-grey);
  color: var(--white);
  transition: all, 0.4s}
 `,
})
export class CocktailsListComponent {
  cocktails = input<Cocktail[]>();
  selectedCocktailName = input.required();
  filter = signal('');
  filteredCocktail = computed(() =>
    this.cocktails()?.filter(({ title }) =>
      title.toLowerCase().includes(this.filter().toLowerCase())
    )
  );
  selectCocktail = output<string>();
  handleClick = () => {
    console.log('je suis là');
  };
}
