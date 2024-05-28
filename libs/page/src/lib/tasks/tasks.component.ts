import { Component } from "@angular/core";

import {
  TasksViewComponent,
  ButtonAddViewComponent,
  TodoListViewComponent,
  ToastViewComponent
} from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    ButtonAddViewComponent,
    TasksViewComponent,
    TodoListViewComponent,
    ToastViewComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
