import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { format } from "date-fns";

import { ButtonAddViewStoreService, EditTodoFormStoreModel, EditTodoFormStoreService, GetPriorityService, PriorityEnum, TodoCoreStoreService } from "@todo/store";

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
  implements OnInit, OnDestroy {

  @Input() id = "";

  coreSubscription!: Subscription;

  readonly title = "Edit Panel";

  readonly submitButton = "Edit";

  constructor(
    store: EditTodoFormStoreService,
    readonly priority: GetPriorityService,
    private readonly coreStore: TodoCoreStoreService,
    private readonly buttonStore: ButtonAddViewStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", Validators.required],
      range: [0, Validators.required],
      deadline: [format(new Date(), "yyyy-MM-dd"), Validators.required],
      priority: [PriorityEnum.low, Validators.required],
      tags: ["", Validators.required]
    }, store);
  }

  ngOnInit() {
    this.coreSubscription = this.coreStore.getModel().subscribe(model => {
      const todo = model.todos.get(this.id);
      if (todo) this.store.setModel(todo);
    });
  }

  ngOnDestroy() {
    this.unsubscribeFormGroup();
  }

  onSubmit() {
    const value = this.getValue();
    this.coreStore.editTodo(this.id, { ...value, isEdited: false });
  }

  onClick() {
    this.coreStore.switchEditMode(this.id);
  }
}
