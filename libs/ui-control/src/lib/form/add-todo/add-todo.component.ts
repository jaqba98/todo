import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../../control/input/input.component';
import { ButtonComponent } from '../../control/button/button.component';
import { AddTodoStore } from '../../store/add-todo.store';

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
  constructor(readonly store: AddTodoStore) {}

  onSubmit() {
    const { model } = this.store;
    console.log(model);
    this.store.cleanModel();
  }
}
