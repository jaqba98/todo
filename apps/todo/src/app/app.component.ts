import { Component } from '@angular/core';

import { AddTodoComponent } from '@todo/ui-control';

@Component({
  standalone: true,
  imports: [AddTodoComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  run(event: unknown) {
    console.log(event);
  }
}
