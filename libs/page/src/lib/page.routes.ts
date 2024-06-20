import { Route } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";

export const pageRoutes: Route[] = [
  {
    path: "",
    redirectTo: "panel/add-todo",
    pathMatch: "full"
  },
  {
    path: "panel/add-todo",
    component: AddTodoComponent
  },
  {
    path: "panel/tasks",
    component: TasksComponent
  },
  {
    path: "**",
    redirectTo: "panel/add-todo",
    pathMatch: "full"
  }
];
