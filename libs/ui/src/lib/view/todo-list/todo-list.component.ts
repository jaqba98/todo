import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { take, tap } from "rxjs";

import { AddTodoCoreStoreModel, TodoListCoreStoreService } from "@todo/store";

import { StatusType } from "../../type/status.type";
import { EditTodoComponent } from "../../form/edit-todo/edit-todo.component";

@Component({
  selector: "lib-todo-list",
  standalone: true,
  imports: [CommonModule, EditTodoComponent],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss"
})
export class TodoListComponent {
  @Input() title = "";

  @Input() status: StatusType = "inProgress";

  isEdit = false;

  model: AddTodoCoreStoreModel = {
    todos: []
  };
  
  constructor(private readonly store: TodoListCoreStoreService) {
    this.store.getModel().subscribe(model => {
      this.model = model;
    });
  }

  getTasks() {
    if (this.status === "inProgress") {
      return this.model.todos.filter(todo => todo.range < 100);
    }
    return this.model.todos.filter(todo => todo.range === 100);
  }

  onEdit(value: boolean) {
    this.isEdit = value;
  }

  onRemove(id: string) {
    this.store.getModel()
      .pipe(
        take(1),
        tap(model => {
          const newTodos = model.todos.filter(todo => todo.id !== id);
          this.store.setModel({ todos: newTodos });
        })
      )
      .subscribe()
      .unsubscribe();
  }
}
