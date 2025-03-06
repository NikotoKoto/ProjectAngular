import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="flex-auto text-bold text-lg" >Cocktails</div>
    <ul>
      <li class="flex flex-row gap-16">
        <a href="#">Basket</a>
        <a href="#">Cocktails list</a>
      </li>
    </ul>
  `,
  styles: `
  :host {
    display: flex;
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
