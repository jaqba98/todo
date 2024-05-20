import { Component } from "@angular/core";

import { TasksViewComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
