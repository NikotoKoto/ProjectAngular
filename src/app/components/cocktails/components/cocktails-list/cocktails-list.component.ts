import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [],
  template: `
    <h2 class="mb-20">Listes des Cocktails</h2>
    <ul class="mb-20">
      <li class="active-item text-primary px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
      
      <li class="px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
      <li class="px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
    </ul>
    <button class="btn btn-primary" (click)="handleClick()">Ajouter un Cocktail</button>
  `,
  styles: `
 `
})
export class CocktailsListComponent {

  handleClick =() => {
    console.log("je suis là")
  }
}
