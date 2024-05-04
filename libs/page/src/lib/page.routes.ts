import { Route } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";

export const pageRoutes: Route[] = [
    {
        path: "",
        redirectTo: "panel/tasks",
        pathMatch: "full"
    },
    {
        path: "panel/tasks",
        component: TasksComponent
    },
    {
        path: "**",
        redirectTo: "panel/tasks",
        pathMatch: "full"
    }
];
