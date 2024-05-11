import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { cloneDeep } from "lodash";
import { CommonModule } from "@angular/common";

import { TodoCoreStoreModel, TodoCoreStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-todo-list",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss"
})
export class TodoListComponent implements OnDestroy {
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
}
