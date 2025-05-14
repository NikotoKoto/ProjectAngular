import { CocktailsService } from './../../../../../shared/services/cocktails.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [],
  template: `
    <p>
      admin-cocktails-form works!
    </p>
  `,
  styles:``
})
export class AdminCocktailsFormComponent {
cocktailService = inject(CocktailsService)
cocktails = computed(() => this.cocktailService.cocktailsResource.value() || [])
}
