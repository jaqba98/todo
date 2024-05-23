import { Component } from "@angular/core";

import {
  TasksViewComponent,
  ButtonAddViewComponent,
  TodoListComponent,
  ToastViewComponent
} from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    ButtonAddViewComponent,
    TasksViewComponent,
    TodoListComponent,
    ToastViewComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
