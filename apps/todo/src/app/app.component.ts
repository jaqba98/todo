import { Component } from '@angular/core';

import { ButtonComponent, InputComponent } from '@todo/ui-control';

@Component({
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
