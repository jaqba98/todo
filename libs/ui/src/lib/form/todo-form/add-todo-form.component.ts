import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";

import { AddTodoFormStoreModel, AddTodoFormStoreService, GetPriorityService, PriorityEnum } from "@todo/store";

import { BaseFormService } from "../base/base-form.service";
import { AddTodoFormModel } from "../../model/add-todo-form.model";
import { InputComponent } from "../../control/input/input.component";
import { LogStatusComponent } from "../../control/log-status/log-status.component";
import { RangeComponent } from "../../control/range/range.component";
import { SelectComponent } from "../../control/select/select.component";
import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-add-todo-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    LogStatusComponent,
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
    readonly priority: GetPriorityService
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
}
