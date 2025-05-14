import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  imports: [RouterLink,RouterLinkActive],
  host:{
    class : 'card flex flex-col p-12'
  },
  template: `
    <ul class="flex flex-col">
      
        <a class="my-2" routerLink="cocktails" routerLinkActive="active-link">Ccoktails</a>
      
      
        <a class="my-2" routerLink="users" routerLinkActive="active-link">Users</a>
 
    </ul>
  `,
  styles:`
  :host{
    width: 200px;
    @media screen and (max-width: 820px) {
       width:100%
    }
  }
  `,
})
export class AdminNavbarComponent {

}
