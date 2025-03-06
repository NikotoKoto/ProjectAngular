import { Component } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces';

@Component({
  selector: 'app-cocktails-details',
  standalone: true,
  imports: [],
  template: `
    <h2 class="mb-20">Details des cocktails</h2>

    <img [src]="cocktail.imageUrl" />
    <h3>
      {{ cocktail.title }}
    </h3>
  <p>{{cocktail.description}}</p>
  `,
  styles: `
  :host{
    :host{
      display:flex;
      flex-direction: column;

    }
  }`,
})
export class CocktailsDetailsComponent {
  cocktail: Cocktail = {
    imageUrl:
      'https://static.750g.com/images/1200-675/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
    description: "Le mojito est un cocktail cubain rafraîchissant, parfait pour l'été. Voici comment le préparer !",
    title: 'Mojito',
  };
}
