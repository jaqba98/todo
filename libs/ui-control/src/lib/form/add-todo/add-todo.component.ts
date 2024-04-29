import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddTodoFromStore } from '@todo/store';

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
  constructor(readonly formStore: AddTodoFromStore) {}

  onSubmit() {
    const model = this.formStore.getModel();
    console.log(model);
    this.formStore.clearModel();
  }
}
