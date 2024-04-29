import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../../control/input/input.component';
import { ButtonComponent } from '../../control/button/button.component';

@Component({
  selector: 'lib-add-todo',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent {
  title = '';

  description = '';

  submitForm() {
    console.log(this.title, this.description);
  }
}
