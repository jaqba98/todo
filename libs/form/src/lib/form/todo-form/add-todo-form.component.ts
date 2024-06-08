import {
  Component,
  EventEmitter,
  OnDestroy,
  Output
} from "@angular/core";
import { Validators } from "@angular/forms";
import { format } from "date-fns";

import {
  AddTodoFormStoreModel,
  AddTodoFormStoreService,
  TodosCoreStoreService,
  ToastViewStoreService,
  PriorityEnum,
  ButtonAddViewStoreService,
  TodoBaseStoreModel
} from "@todo/store";
import { BaseFormService } from "../../base/base-form.service";
import { AddTodoFormModel } from "../../model/add-todo-form.model";

@Component({
  selector: "lib-add-todo-form",
  standalone: true,
  imports: BaseFormService.imports(),
  templateUrl: "./todo-form.component.html"
})
export class AddTodoFormComponent
  extends BaseFormService<AddTodoFormModel, AddTodoFormStoreModel>
  implements OnDestroy {
  @Output() event: EventEmitter<TodoBaseStoreModel>;
  
  constructor(
    protected override readonly store: AddTodoFormStoreService,
    private readonly coreStore: TodosCoreStoreService,
    private readonly toastStore: ToastViewStoreService,
    private readonly buttonAddStore: ButtonAddViewStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", []],
      range: [0, Validators.required],
      deadline: [
        format(new Date(), "yyyy-MM-dd"),
        Validators.required
      ],
      priority: [PriorityEnum.doItFirst, Validators.required],
      tags: ["", Validators.required]
    }, store);
    this.event = new EventEmitter<TodoBaseStoreModel>();
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
    this.event.emit(value);
  }

  onClick() {
    this.buttonAddStore.changeIsOpened(false);
  }
}
