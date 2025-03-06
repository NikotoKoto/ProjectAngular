import { Component } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './components/cocktails-details/cocktails-details.component';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CocktailsListComponent, CocktailsDetailsComponent],
  template: `
    <app-cocktails-list class="w-half card"/>
    <app-cocktails-details class="w-half card"/>
  `,
  styles: 
    `:host{
      display: flex;
      gap: 24px;
      padding: 24px;
  }
      `

    
})
export class CocktailsComponent {

}
