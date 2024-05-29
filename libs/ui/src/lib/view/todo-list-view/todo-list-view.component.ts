import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { cloneDeep } from "lodash";
import { CommonModule } from "@angular/common";

import { TodoCoreStoreModel, TodoCoreStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { EditTodoFormComponent } from "../../form/todo-form/edit-todo-form.component";

@Component({
  selector: "lib-todo-list-view",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    EditTodoFormComponent
  ],
  templateUrl: "./todo-list-view.component.html",
  styleUrl: "./todo-list-view.component.scss"
})
export class TodoListViewComponent implements OnDestroy {
  model: TodoCoreStoreModel = {
    todos: new Map()
  };

  subscription: Subscription;

    @Input({ required: true }) title = "";

    constructor(private readonly coreStore: TodoCoreStoreService) {
      this.subscription = this.coreStore.getModel().subscribe(model => {
        this.model = cloneDeep(model);
      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    onRemove(id: string) {
      this.coreStore.deleteTodo(id);
    }

    onEdit(id: string) {
      this.coreStore.switchEditMode(id);
    }
}
