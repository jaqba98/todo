import { Component } from "@angular/core";

import { AddTodoFormComponent, TodoListComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoFormComponent,
    TodoListComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
