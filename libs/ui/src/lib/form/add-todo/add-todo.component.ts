import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Subscription } from "rxjs";

import { AddTodoFormStoreModel, AddTodoFormStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";

@Component({
  selector: "lib-add-todo",
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: "./add-todo.component.html",
})
export class AddTodoComponent implements OnDestroy {
  form: FormGroup;

  subscription: Subscription;

  constructor(
    private readonly builder: FormBuilder,
    private readonly store: AddTodoFormStoreService
  ) {
    this.form = this.builder.group<AddTodoFormStoreModel>(
      this.store.getCleanModel()
    );
    this.subscription = this.store.getModel().subscribe((model) => {
      console.log(model);
      this.form.patchValue(model);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.store.setModel(this.form.value);
    this.store.clearModel();
  }
}
