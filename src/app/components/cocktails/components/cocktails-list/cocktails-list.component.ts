import { Cocktail } from 'app/shared/interfaces';
import { cocktails } from './../../../../shared/data/cocktails.data';
import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  standalone: true,
  template: `
    <h2 class="mb-20">Listes des Cocktails</h2>
    <input
      [(ngModel)]="filter"
      type="text"
      #search
      class="mb-20 w-full input"
      placeholder="Recherche d'un cocktail"
    />
    <ul class="mb-20">
      @let likeIds = likedCocktailsID();
      @for (cocktail of filteredCocktail(); track cocktail.title){ @let active =
      cocktail._id === selectedCocktailId();
      <li
        (click)="selectedCocktailId.set(cocktail._id)"
        [class.active-item]="active"
        [class.text-primary]="active"
        class="px-12 py-6 my-2 radius"
      >
        <h3 class="flex">
          <span class="flex-auto">{{ cocktail.title }}</span>
        @if(likeIds.includes(cocktail._id)){
          <span>&#10084;</span>
        }
        </h3>
      </li>
      }
    </ul>
    <button class="btn btn-primary">Ajouter un Cocktail</button>
  `,
  styles: `
  li:hover {
    cursor: pointer;
  background-color: var(--light-grey);
  color: var(--white);
  transition: all, 0.4s}
 `,
  host: {
    '(window:keydown)': 'keyboardInteraction($event)',
  },
})
export class CocktailsListComponent {
  cocktails = input<Cocktail[]>();
  search = viewChild<ElementRef<HTMLInputElement>>('search');
  filter = signal('');
  filteredCocktail = computed(() =>
    this.cocktails()?.filter(({ title }) =>
      title.toLowerCase().includes(this.filter().toLowerCase())
    )
  );

  selectedCocktailId = model<string | null>();
  likedCocktailsID = input.required<string[]>()
  likeCocktails = output<string>();
  unlikeCocktails = output<string>();
  keyboardInteraction({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape': {
        this.selectedCocktailId.set(null);
        break;
      }
      case 'Enter': {
        const selectedCocktailId = this.selectedCocktailId();
        if(selectedCocktailId){
          if(this.likedCocktailsID().includes(selectedCocktailId)){
            this.unlikeCocktails.emit(selectedCocktailId)
          } else {
            this.likeCocktails.emit(selectedCocktailId)
          }

        }
        break;
      }
      case 'ArrowUp':   
      case 'ArrowDown': {
        const selectedCocktail = this.selectedCocktailId();
        const cocktails = this.cocktails();
        if(cocktails?.length){
          if(selectedCocktail){
            const index = cocktails.findIndex(({_id}) => _id === selectedCocktail);
            if(key === 'ArrowDown'){
              const nextCocktailIndex = index === cocktails.length -1 ? 0 : index +1;
              this.selectedCocktailId.set(cocktails[nextCocktailIndex]._id)
            }else{
              const nextCocktailIndex = index === 0 ? cocktails.length-1 : index -1;
              this.selectedCocktailId.set(cocktails[nextCocktailIndex]._id)
            }
          }else{
            if(key === 'ArrowDown'){
              const {_id} = cocktails[0]
              this.selectedCocktailId.set(_id)
            }else{
              const {_id} = cocktails.at(-1)!;
              this.selectedCocktailId.set(_id)
            }
          }
          
        }
        break;
      }
      default: {
        this.search()?.nativeElement.focus();
      }
    }
  }
}
