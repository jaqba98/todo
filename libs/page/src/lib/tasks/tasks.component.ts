import { Component } from "@angular/core";

import { TasksViewComponent } from "@todo/view";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
