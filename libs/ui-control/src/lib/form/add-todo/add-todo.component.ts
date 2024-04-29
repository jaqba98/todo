import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../../control/input/input.component';
import { ButtonComponent } from '../../control/button/button.component';
import { AddTodoModel } from '../../model/add-todo.model';

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
  @Output() event = new EventEmitter<AddTodoModel>();

  model: AddTodoModel = {
    title: '',
    description: ''
  } 

  submitForm() {
    this.event.emit(this.model);
  }
}
