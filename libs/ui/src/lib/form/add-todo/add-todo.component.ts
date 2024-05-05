import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AddTodoFormStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";
import { InputComponent } from "../../control/input/input.component";
import { AddTodoFormModel } from "../../model/form/add-todo-form.model";

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
    private readonly fb: FormBuilder,
    private readonly store: AddTodoFormStoreService
  ) {
    this.form = this.fb.group<AddTodoFormModel>({
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
    this.subscription = this.store.getModel().subscribe((model) => {
      this.form.patchValue(model);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
    this.store.setModel(this.form.value);
    this.store.clearModel();
  }
}
