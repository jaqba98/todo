import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { TodoCoreStoreService } from "@todo/store";

@Component({
  selector: "lib-todo-list",
  standalone: true,
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss"
})
export class TodoListComponent implements OnDestroy {
  subscription: Subscription;

  @Input({ required: true }) title = "";

  constructor(private readonly coreStore: TodoCoreStoreService) {
    this.subscription = this.coreStore.getModel().subscribe(model => {
      console.log(model);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
