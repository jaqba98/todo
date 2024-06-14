import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { Validators } from "@angular/forms";
import { format } from "date-fns";
import { Subscription } from "rxjs";

import {
  EditTodoFormStoreModel,
  EditTodoFormStoreService,
  TodosCoreStoreService,
  PriorityEnum,
  ButtonAddViewStoreService,
  ToastViewStoreService,
  TodoCoreStoreModel
} from "@todo/store";
import { BaseFormService } from "../../base/base-form.service";
import { EditTodoFormModel } from "../../model/edit-todo-form.model";

@Component({
  selector: "lib-edit-todo-form",
  standalone: true,
  imports: BaseFormService.imports(),
  templateUrl: "./todo-form.component.html"
})
export class EditTodoFormComponent
  extends BaseFormService<EditTodoFormModel, EditTodoFormStoreModel>
  implements OnInit, OnDestroy {
  @Input() id = "";

  @Output() event: EventEmitter<TodoCoreStoreModel>;

  title: string;

  description: string;

  successMsg: string;

  private coreSub!: Subscription;

  constructor(
    protected override readonly store: EditTodoFormStoreService,
    private readonly coreStore: TodosCoreStoreService,
    private readonly toastStore: ToastViewStoreService,
    private readonly buttonAddStore: ButtonAddViewStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", []],
      completion: [0, Validators.required],
      deadline: [
        format(new Date(), "yyyy-MM-dd"),
        Validators.required
      ],
      priority: [PriorityEnum.doItFirst, Validators.required],
      tags: ["", []]
    }, store);
    this.event = new EventEmitter<TodoCoreStoreModel>();
    this.title = "Edit To Do";
    this.description = "Complete the form and press the edit button";
    this.successMsg = "Task updated successfully!";
  }

  ngOnInit() {
    this.coreSub = this.coreStore.getModel().subscribe(model => {
      const todo = model.todos.get(this.id);
      if (!todo)
        throw new Error(`No todo found to edit by id: ${this.id}`);
      this.store.emitModel(todo);
    });
  }

  ngOnDestroy() {
    this.unsubscribeFormGroup();
    this.coreSub.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.isAdded = false;
    const { invalid } = this.getFormGroup();
    if (invalid) return;
    const value = this.getFormGroupValue();
    const todo = { ...value, isEdited: false };
    this.coreStore.editTodo(this.id, todo);
    this.toastStore.changeIsVisible(true);
    this.isSubmitted = false;
    this.isAdded = true;
    this.event.emit(todo);
  }

  onClick() {
    this.buttonAddStore.changeIsOpened(false);
  }

  getOptions() {
    return Object.values(PriorityEnum);
  }
}
