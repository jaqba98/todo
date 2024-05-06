import { Component } from "@angular/core";

import { AddTodoComponent, TodoListComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoComponent,
    TodoListComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
