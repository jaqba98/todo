import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { format } from "date-fns";

import {
  InputComponent,
  MessageStatusComponent,
  RangeComponent,
  SelectComponent,
  ButtonComponent
} from "@todo/control";
import {
  AddTodoFormStoreModel,
  AddTodoFormStoreService,
  TodosCoreStoreService,
  ToastViewStoreService,
  PriorityEnum,
  ButtonAddViewStoreService
} from "@todo/store";
import { BaseFormService } from "../../base/base-form.service";
import { AddTodoFormModel } from "../../model/add-todo-form.model";

@Component({
  selector: "lib-add-todo-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    MessageStatusComponent,
    RangeComponent,
    SelectComponent,
    ButtonComponent
  ],
  templateUrl: "./todo-form.component.html"
})
export class AddTodoFormComponent
  extends BaseFormService<AddTodoFormModel, AddTodoFormStoreModel>
  implements OnDestroy {
  
  constructor(
    protected override readonly store: AddTodoFormStoreService,
    private readonly coreStore: TodosCoreStoreService,
    private readonly toastStore: ToastViewStoreService,
    private readonly buttonAddStore: ButtonAddViewStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", Validators.required],
      range: [0, Validators.required],
      deadline: [
        format(new Date(), "yyyy-MM-dd"),
        Validators.required
      ],
      priority: [PriorityEnum.doItFirst, Validators.required],
      tags: ["", Validators.required]
    }, store);
  }

  ngOnDestroy(): void {
    this.unsubscribeFormGroup();
  }

  onSubmit() {
    this.isSubmitted = true;
    const { invalid } = this.getFormGroup();
    if (invalid) return;
    const value = this.getFormGroupValue();
    this.coreStore.addTodo({ ...value, isEdited: false });
    this.store.cleanModel();
    this.toastStore.changeIsVisible(true);
    this.isSubmitted = false;
  }

  onClick() {
    this.buttonAddStore.changeIsOpened(false);
  }
}
