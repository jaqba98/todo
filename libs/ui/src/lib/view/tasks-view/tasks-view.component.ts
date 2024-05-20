import { Component } from "@angular/core";

import { AddTodoFormComponent } from "../../form/todo-form/add-todo-form.component";

@Component({
  selector: "lib-tasks-view",
  standalone: true,
  imports: [
    AddTodoFormComponent
  ],
  templateUrl: "./tasks-view.component.html",
  styleUrl: "./tasks-view.component.scss"
})
export class TasksViewComponent {
}
