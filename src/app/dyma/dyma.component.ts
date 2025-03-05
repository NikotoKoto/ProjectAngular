import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma',
  standalone: true,
  imports: [],
  template: `
    <h1 class="test">{{title}}</h1>
    <ul>
      <li>{{title}}</li>
      <li>{{isLoggedin}}</li>
      <li>{{number}}</li>
      <li>{{name}}</li>
     </ul>
  `,
  styles: `
  .test{
    color :red;

  }`
})
export class DymaComponent {

  title = "Dyma";
  isLoggedin = true; 
  number = 45;
  name: string | undefined;
}
