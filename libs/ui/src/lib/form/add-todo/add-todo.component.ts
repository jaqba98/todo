import { Component, OnDestroy } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { take, tap } from "rxjs";
import { v4 } from "uuid";

import { AddTodoFormStoreModel, AddTodoFormStoreService, AddTodoItemCoreStoreModel, PriorityEnum, TodoListCoreStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";
import { AddTodoFormModel } from "../../model/add-todo-form.model";
import { BaseFormService } from "../base/base-form.service";
import { LogStatusComponent } from "../../control/log-status/log-status.component";
import { SelectComponent } from "../../control/select/select.component";
import { RangeComponent } from "../../control/range/range.component";

@Component({
  selector: "lib-add-todo",
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
  templateUrl: "./add-todo.component.html",
  styleUrl: "./add-todo.component.scss"
})
export class AddTodoComponent extends BaseFormService<AddTodoFormModel, AddTodoFormStoreModel> implements OnDestroy {
  constructor(
    private readonly store: AddTodoFormStoreService,
    private readonly coreStore: TodoListCoreStoreService
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

  ngOnDestroy(): void {
    this.destroyForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    const form = this.getForm();
    if (form.invalid) return;
    this.coreStore.getModel()
      .pipe(
        take(1),
        tap(oldModel => {
          const newTask: AddTodoItemCoreStoreModel = {
            ...this.getForm().value,
            id: v4()
          };
          this.coreStore.setModel({
            ...oldModel,
            todos: [...oldModel.todos, newTask]
          });
          this.store.setModel(form.value);
          this.store.clearModel();
          this.isSubmitted = false;
        })
      )
      .subscribe()
      .unsubscribe();
  }

  getPriority() {
    return Object.values(PriorityEnum);
  }
}
