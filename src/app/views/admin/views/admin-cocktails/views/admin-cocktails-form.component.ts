import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CocktailsService } from './../../../../../shared/services/cocktails.service';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Cocktail, CocktailForm } from 'app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [ReactiveFormsModule],
  host: {
    class: 'card',
  },
  template: `
  @if(this.cocktailId){
    <h3 class="mb-20">Modification du cocktail</h3>
  }@else {

    <h3 class="mb-20">Création d'un cocktail</h3>
  }
    <form [formGroup]="cocktailForm" (submit)="submit()">
      <div class="flex flex-col mb-10">
        <label for="title">Nom du cocktail</label>
        <input formControlName="title" type="text" id="title" />
        @if(nameControl.errors?.['required'] && nameControl.touched){
        <p class="error">Le nom du cocktail est obligatoire</p>
        }
      </div>
      <div class="flex flex-col mb-10">
        <label for="imageUrl">Image du cocktail</label>
        <input formControlName="imageUrl" type="text" id="imageUrl" />
      </div>
      <div class="flex flex-col mb-10">
        <label for="description">Description du cocktail</label>
        <textarea
          formControlName="description"
          id="description"
          cols="3"
        ></textarea>
      </div>
      <div class="mb-20">
        <div class="flex align-items-center gap-12 mb-10">
          <label class="flex-auto">Ingrédients</label>
          <button type="button" (click)="addIngredient()" class="btn btn-primary">
            Ajouter
          </button>
        </div>
        <ul formArrayName="ingredients">
          @for(ingredient of ingredientsControl.controls; track $index){

          <li class="flex align-items-center gap-12 mb-10">
            <input class="flex-auto " [formControlName]="$index" type="text" />
            <button type="submit" class="btn btn-danger" (click)="deleteIngredient($index)">
              Suuprimer
            </button>
          </li>
          }
        </ul>
      </div>
      <div>
        <button
          [disabled]="cocktailForm.invalid || this.isLoading()"
          class="btn btn-primary"
        >
          Sauvegarder
        </button>
      </div>
    </form>
  `,
  styles: `
  :host{
    margin-top: 20px;
  }
  .card{
    padding:8px;
  }
  `,
})
export class AdminCocktailsFormComponent {
  private fb = inject(FormBuilder);
  isLoading = signal(false);
  cocktails = computed(()=> this.cocktailsService.cocktailsResource.value())
  private cocktailsService = inject(CocktailsService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  cocktailId = toSignal(this.activatedRoute.params)()!['cocktailId'];
  cocktailForm = this.fb.group({
    title: ['', Validators.required],
    imageUrl: [''],
    description: [''],
    ingredients: this.fb.array([]),
  });

  initCocktailFormEffect = effect(()=> {
    if(this.cocktailId){
      const cocktails = this.cocktails();
      if(cocktails){
        const { title, imageUrl,description,ingredients} = cocktails.find(c => c._id === this.cocktailId)!;
        this.cocktailForm.patchValue({
          title,
          imageUrl,
          description,
         
        })

        ingredients.forEach(i => this.ingredientsControl.push(this.fb.control(i)))
        this.initCocktailFormEffect.destroy();
      }
    }else{
      this.initCocktailFormEffect.destroy();
    }
  })

  get ingredientsControl() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  get nameControl() {
    return this.cocktailForm.get('title') as FormControl;
  }
  async submit() {
    this.isLoading.set(true)
    try{
      if(this.cocktailId){
        await this.cocktailsService.editCocktail({
          ...this.cocktailForm.getRawValue(), 
          _id: this.cocktailId
      } as Cocktail)
      }else{

        this.cocktailsService.addCcoktail(  
        this.cocktailForm.getRawValue() as CocktailForm
      );
      }
      this.cocktailForm.reset({
        title:'',
        imageUrl:'',
        description:''
      });

      while(this.ingredientsControl.length >0){
        this.ingredientsControl.removeAt(0);
      }
      this.router.navigateByUrl('/admin/cocktails/list')
      }catch(e){

      }finally{
        this.isLoading.set(false);
      }
  }

  deleteIngredient(index: number) {
    this.ingredientsControl.removeAt(index);
  }

  addIngredient(): void {
    this.ingredientsControl.push(this.fb.control(''));
  }
}
