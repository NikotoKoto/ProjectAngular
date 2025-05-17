import { Injectable, resource } from '@angular/core';
import { Cocktail, CocktailForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  BASE_URL = 'https://restapi.fr/api/cocktails';
  cocktailsResource = resource({
    loader: async (): Promise <Cocktail[]> => 
    (await fetch(this.BASE_URL)).json(),
  })


  async deleteCocktail(cocktailId : string){
    await fetch(`${this.BASE_URL}/${cocktailId}`,{
      method: 'DELETE'
    })
   this.cocktailsResource.reload();
  }

  async editCocktail(cocktail: Cocktail){
    const { _id, ...restCocktail} = cocktail;
const response = await fetch(`${this.BASE_URL}/${_id}`,{
  method : 'PATCH',
  headers:{
    'Content-type' : 'application/json'
  },
  body: JSON.stringify(restCocktail)
})
const body = await response.json();
  if(response.ok){
    this.cocktailsResource.reload();
  }else {
    throw new Error(body)
  }
  }

  async addCcoktail(cocktailForm : CocktailForm){
    const response = await fetch(`${this.BASE_URL}`,{
      method : 'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(cocktailForm) 
    });
    const body = await response.json();
    if(response.ok){
      this.cocktailsResource.reload()
    }else{
      throw new Error(body);
    }
  }
  constructor() { }
}
