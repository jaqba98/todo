import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EditTodoFormStoreModel, EditTodoFormStoreService, GetPriorityService, PriorityEnum } from "@todo/store";

import { BaseFormService } from "../base/base-form.service";
import { EditTodoFormModel } from "../../model/edit-todo-form.model";
import { InputComponent } from "../../control/input/input.component";
import { MessageStatusComponent } from "../../control/message-status/message-status.component";
import { RangeComponent } from "../../control/range/range.component";
import { SelectComponent } from "../../control/select/select.component";
import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-edit-todo-form",
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
export class EditTodoFormComponent
  extends BaseFormService<EditTodoFormModel, EditTodoFormStoreModel>
  implements OnDestroy {

  readonly title = "Edit Panel";

  readonly submitButton = "Edit";

  constructor(
    store: EditTodoFormStoreService,
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
