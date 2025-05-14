import { Component } from '@angular/core';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [HeaderMenuComponent,RouterLink,RouterLinkActive],
    template: `
    <div class="flex-auto text-bold text-lg" >Cocktails</div>
    <ul class="xs-hide flex flex-row gap-16 ">
    <li>
        <a routerLink="/admin" routerLinkActive="active-link">Admin</a>
      </li>  
    <li>
        <a routerLink="/basket" routerLinkActive="active-link">Panier</a>
      </li>
      <li>
        <a routerLink="/cocktails" routerLinkActive="active-link"> Cocktails</a>
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
  }`
})
export class HeaderComponent {}
