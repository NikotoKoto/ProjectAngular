import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header-menu',
    standalone:true,
    imports: [RouterLink, RouterLinkActive],
    template: `
    <button (click)="toggleMenu()">=</button>
    @if(show()){
    <ul>
      @for(link of navigation; track $index){
        <li (click)="show.set(false)" class="mb-20" [class.mb-20]="!$last">
        <a [routerLink]="link.path" routerLinkActive="active-link">{{link.name}}</a>
      </li>
  
      }
      
    </ul>

    }
  `,
    styles: `
  button{
    padding: 16px;
    border: none;
    background-color: inherit;
    font-size: 24px;
    color : white;
    cursor:pointer;
  }
  ul{
    position:absolute;
    right: 12px;
    padding:20px;
    top: 65px;

    display:flex;
    flex-direction:column;
    border : var(--border);
    border-radius:var(--radius);
    color: var(--text-color);
    background-color: white;
    
    :hover{
      text-decoration: none;
      background-color: var(--light-grey);
      color: var(--white);
      border-radius: var(--radius);
      transition: all, 0.4s
    }
  }`
})
export class HeaderMenuComponent {
  show = signal(false);
  navigation = [
    {
      path: "/admin",
      name: "Admin"
    },
    { 
    path: "/cocktails",
    name:"Cocktails"
    },
    {path: "/basket",
      name: "Panier"
    }
  ]
  toggleMenu() {
    this.show.update((s) => !s);
  }
}
