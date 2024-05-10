import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AddTodoItemCoreStoreModel, EditTodoFormStoreModel, EditTodoFormStoreService, PriorityEnum, TodoListCoreStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";
import { BaseFormService } from "../base-form/base-form.service";
import { LogStatusComponent } from "../../control/log-status/log-status.component";
import { SelectComponent } from "../../control/select/select.component";
import { RangeComponent } from "../../control/range/range.component";
import { EditTodoFormModel } from "../../model/form/edit-todo-form.model";
import { take, tap } from "rxjs";

@Component({
  selector: "lib-edit-todo",
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
  templateUrl: "./edit-todo.component.html",
  styleUrl: "./edit-todo.component.scss",
})
export class EditTodoComponent extends BaseFormService<EditTodoFormModel, EditTodoFormStoreModel> implements OnInit, OnDestroy {
  @Input() id = "";
  
  constructor(
    private readonly store: EditTodoFormStoreService,
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

  ngOnInit(): void {
    this.coreStore.getModel().subscribe(model => {
      const todo = model.todos.find(todo => todo.id === this.id);
      this.store.setModel({
        name: todo?.name ?? "",
        description: todo?.description ?? "",
        range: todo?.range ?? 0,
        deadline: todo?.deadline ?? new Date(),
        priority: todo?.priority ?? PriorityEnum.low,
        tags: todo?.tags ?? ""
      });
    });
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
          const task: AddTodoItemCoreStoreModel = {
            ...this.getForm().value,
            id: this.id
          };
          const newModel = {
            todos: oldModel.todos.map(todo => {
              if (todo.id === this.id) {
                return {
                  id: task.id,
                  name: task.name,
                  description: task.description,
                  range: task.range,
                  deadline: task.deadline,
                  priority: task.priority,
                  tags: task.tags
                };
              }
              return todo;
            })
          };
          this.coreStore.setModel(newModel);
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
