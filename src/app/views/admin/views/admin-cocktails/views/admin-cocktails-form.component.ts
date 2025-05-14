import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CocktailsService } from './../../../../../shared/services/cocktails.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [ReactiveFormsModule],
  host: {
    class: 'card'
  },
  template: `
  <h3 class="mb-20">Création d'un cocktail</h3>
    <form (submit)="submit()">
      <div class="flex flex-col mb-10">
        <label for="name">Nom du cocktail</label>
        <input formControlName="name" type="text" id="name"/>
      </div>
      <div class="flex flex-col mb-10">
        <label for="imageUrl">Image du cocktail</label>
        <input formControlName="imageUrl" type="text" id="imageUrl"/>
      </div>
      <div class="flex flex-col mb-10">
        <label for="description">Description du cocktail</label>
        <textarea formControlName="description" id="description" cols="3"></textarea>
      </div>
      <div class="flex align-items-center gap-12">
        <label class="flex-auto">Ingrédients</label>
        <button class="btn btn-primary">Ajouter</button>
       
      </div>
       <ul formArrayName="ingredients">
          @for(ingredient of ingredients.controls; track $index){
           
           <li class="flex align-items-center gap-12">
             <input class="flex-auto" [formControlName]="$index" type="text">
            <button (click)="deleteIngredient($index)">Suuprimer</button>
           </li>
          }
        </ul>
      <div>
        <button type="submit" class="btn btn-primary">Sauvegarder</button>
      </div>
    </form>
  `,
  styles:`
  .card{
    padding:8px;
  }
  `
})
export class AdminCocktailsFormComponent {
private fb = inject(FormBuilder)
cocktailForm= this.fb.group({
  name: ['',Validators.required],
  imageUrl: [''],
  description: [''],
  ingredients : this.fb.array([]),

})

get ingredients(){
  return this.cocktailForm.get('ingredients') as FormArray;
}
  submit(){
console.log(this.cocktailForm)
  }

  deleteIngredient(index : number){
this.ingredients.removeAt(index)
  }
}
