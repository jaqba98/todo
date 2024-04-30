import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CreateFormValue } from "@todo/store";

import { InputType } from "../../type/control.type";

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() type: InputType = 'text';

  @Input() placeholder = '';

  @Input() model;

  constructor(private readonly formValue: CreateFormValue) {
    this.model = formValue.create('');
  }
}
