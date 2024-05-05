import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";

import { AddTodoFormStoreModel, AddTodoFormStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";
import { AddTodoFormModel } from "../../model/form/add-todo-form.model";
import { BaseFormService } from "../base-form/base-form.service";
import { CommonModule } from "@angular/common";
import { LogStatusComponent } from "../../control/log-status/log-status.component";

@Component({
  selector: "lib-add-todo",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    LogStatusComponent
  ],
  templateUrl: "./add-todo.component.html",
})
export class AddTodoComponent extends BaseFormService<AddTodoFormModel, AddTodoFormStoreModel> implements OnDestroy {
  constructor(private readonly store: AddTodoFormStoreService) {
    super({
      title: ["", Validators.required],
      description: ["", Validators.required]
    }, store);
  }

  ngOnDestroy(): void {
    this.destroyForm();
  }
}
