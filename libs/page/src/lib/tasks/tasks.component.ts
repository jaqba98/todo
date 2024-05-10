import { Component } from "@angular/core";

import { AddTodoFormComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [AddTodoFormComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
