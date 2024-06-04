import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { format } from "date-fns";

import {
  ButtonAddViewStoreService,
  EditTodoFormStoreModel,
  EditTodoFormStoreService,
  PriorityService,
  PriorityEnum,
  TodosCoreStoreService
} from "@todo/store";

import { BaseFormService } from "../base/base-form.service";
import {
  InputComponent,
  MessageStatusComponent,
  RangeComponent,
  SelectComponent,
  ButtonComponent
} from "@todo/control";
import { EditTodoFormModel } from "../../model/edit-todo-form.model";

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
    readonly priority: PriorityService,
    private readonly coreStore: TodosCoreStoreService,
    private readonly buttonStore: ButtonAddViewStoreService
  ) {
    super({
      name: ["", Validators.required],
      description: ["", Validators.required],
      range: [0, Validators.required],
      deadline: [
        format(new Date(), "yyyy-MM-dd"), Validators.required
      ],
      priority: [PriorityEnum.doNotDo, Validators.required],
      tags: ["", Validators.required]
    }, store);
  }

  ngOnInit() {
    this.coreSubscription = 
    this.coreStore.getModel().subscribe(model => {
      const todo = model.todos.get(this.id);
      if (todo) {
        // this.store.setModel(todo);
      }
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
    this.coreStore.changeIsEdited(this.id, true);
  }
}
