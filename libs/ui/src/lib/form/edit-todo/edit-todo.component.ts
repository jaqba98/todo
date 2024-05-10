import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { PriorityEnum } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";
import { LogStatusComponent } from "../../control/log-status/log-status.component";
import { SelectComponent } from "../../control/select/select.component";
import { RangeComponent } from "../../control/range/range.component";

@Component({
  selector: "lib-edit-todo",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RangeComponent,
    LogStatusComponent
  ],
  templateUrl: "./edit-todo.component.html",
  styleUrl: "./edit-todo.component.scss"
})
export class EditTodoComponent {
  @Input() name = "";

  @Input() description = "";
  
  @Input() range = 0;
  
  @Input() deadline = new Date();

  @Input() priority = PriorityEnum.low;

  @Input() tags = "";

  getPriority() {
    return Object.values(PriorityEnum);
  }
}
