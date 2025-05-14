import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { seedData } from './shared/data/seed';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, FooterComponent,RouterOutlet],
    template: ` <app-header />
    <div class="flex-auto">
      <router-outlet /> 
    </div> 
    <app-footer />
    `,
    styles: `
    :host {
    min-height : 100vh;
    display: flex;
    flex-direction : column;
  }
  `
})
export class AppComponent {

  constructor(){
    //  seedData();
  }
}
