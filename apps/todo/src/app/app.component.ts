import { Component } from '@angular/core';

import { InputComponent } from '@todo/ui-control';

@Component({
  standalone: true,
  imports: [InputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
