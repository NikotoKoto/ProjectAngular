import { Component, Input, input, signal } from '@angular/core';
import { Cocktail } from 'app/shared/interfaces';


@Component({
  selector: 'app-cocktails-details',
  standalone: true,
  imports: [],
  template: `
    <h2 class="mb-20 py-6">Details des cocktails</h2>

    <img [src]="cocktail().imageUrl" />
    <h3 class="py-6 flex justify-content-center">
      {{cocktail().title}}
    </h3>
  <p>{{cocktail().description}}</p>
  <ul>@for(ingredient of cocktail().ingredient; track $index){
  <li class="my-2">{{ingredient}}</li>
  }
  </ul>
  `,
  styles: `

    :host{
      display:flex;
      flex-direction: column;

    }
    img{
      height:auto;
      width:100%;
      border-radius: 15px;
      display: block;
      object-fit: contain;
    }
    ul{
      list-style: disc;
      padding-left: 20px;
      font-size: 14px;
      font-weight: 500;
    }
  `,
})
export class CocktailsDetailsComponent {
cocktail = input.required<Cocktail>();
}
