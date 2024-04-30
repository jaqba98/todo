import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AddTodoFormStore } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";

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
  constructor(readonly formStore: AddTodoFormStore) {}

  onSubmit() {
    const model = this.formStore.getModel();
    console.log(model);
    this.formStore.clearModel();
  }
}
