import { Component } from '@angular/core';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMenuComponent],
  template: `
    <div class="flex-auto text-bold text-lg" >Cocktails</div>
    <ul class="xs-hide flex flex-row gap-16 ">
      <li>
        <a href="#">Panier</a>
      </li>
      <li>
        <a href="#"> Listes des cocktails</a>
      </li>
    </ul>

    <app-header-menu class="hide xs-show" />
  `,
  styles: `
  :host {
    display: flex;
    position:relative;
    flex-direction: row;
    align-items: center;
    background-color: var(--primary);
    color: var(--white);
    height: 56px;
    padding: 0 16px;

    a{
      color: var(--white);
    }
  }`,
})
export class HeaderComponent {}
