import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  BASE_URL = 'https://restapi.fr/api/cocktails';
  cocktailsResource = resource({
    loader: async (): <Promise: Coktail[]> => 
    (await fetch(this.BASE_URL)).json();
  })
  constructor() { }
}
