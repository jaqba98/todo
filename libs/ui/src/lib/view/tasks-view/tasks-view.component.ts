import { Component, Input, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonAddViewStoreService } from "@todo/store";

import { AddTodoFormComponent } from "../../form/todo-form/add-todo-form.component";
import { Subscription } from "rxjs";

@Component({
  selector: "lib-tasks-view",
  standalone: true,
  imports: [
    CommonModule,
    AddTodoFormComponent
  ],
  templateUrl: "./tasks-view.component.html",
  styleUrl: "./tasks-view.component.scss"
})
export class TasksViewComponent implements OnDestroy {
    @Input()
      isOpened = false;

    subscription: Subscription;
  
    constructor(private readonly store: ButtonAddViewStoreService) {
      this.subscription = this.store.getModel().subscribe(model => {
        this.isOpened = model.isOpened;
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
