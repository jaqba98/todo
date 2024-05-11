import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AddTodoFormStoreModel, AddTodoFormStoreService, GetPriorityService, PriorityEnum, TodoCoreStoreService } from "@todo/store";

import { BaseFormService } from "../base/base-form.service";
import { AddTodoFormModel } from "../../model/add-todo-form.model";
import { InputComponent } from "../../control/input/input.component";
import { MessageStatusComponent } from "../../control/message-status/message-status.component";
import { RangeComponent } from "../../control/range/range.component";
import { SelectComponent } from "../../control/select/select.component";
import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-add-todo-form",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    MessageStatusComponent,
    RangeComponent,
    SelectComponent,
    ButtonComponent
  ],
  templateUrl: "./todo-form.component.html",
  styleUrl: "./todo-form.component.scss"
})
export class AddTodoFormComponent
  extends BaseFormService<AddTodoFormModel, AddTodoFormStoreModel>
  implements OnDestroy {

  readonly title = "Add Todo";

  readonly submitButton = "Add";
  
  constructor(
    store: AddTodoFormStoreService,
    readonly priority: GetPriorityService,
    private readonly coreStore: TodoCoreStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", Validators.required],
      range: [0, Validators.required],
      deadline: [new Date(), Validators.required],
      priority: [PriorityEnum.low, Validators.required],
      tags: ["", Validators.required]
    }, store);
  }

  ngOnDestroy() {
    this.unsubscribeFormGroup();
  }

  onSubmit() {
    this.isSubmitted = true;
    const { invalid } = this.getFormGroup();
    if (invalid) return;
    const value = this.getValue();
    this.coreStore.addTodo({ ...value, isEdited: false });
    this.store.cleanModel();
    this.isSubmitted = false;
  }
}
