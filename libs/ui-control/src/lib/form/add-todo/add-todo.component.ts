import { Component, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";

import { AddTodoFormStore } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";

@Component({
  selector: "lib-add-todo",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: "./add-todo.component.html"
})
export class AddTodoComponent implements OnDestroy {
  title = "";

  description = "";

  subscription: Subscription;

  constructor(readonly store: AddTodoFormStore) {
    this.subscription = this.store.model$.subscribe(model => {
      this.title = model.title;
      this.description = model.description;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.store.setModel({ title: this.title, description: this.description });
    const model = this.store.getModel();
    console.log(model);
    this.store.setModel({ title: "", description: "" });
  }
}
