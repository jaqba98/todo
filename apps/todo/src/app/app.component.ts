import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiControlComponent } from '@todo/ui-control';

@Component({
  standalone: true,
  imports: [RouterModule, UiControlComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
}
