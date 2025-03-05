import { Component } from '@angular/core';
import { DymaComponent } from "./dyma/dyma.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DymaComponent]
})
export class AppComponent {
  title = 'ProjectAngular';
}
