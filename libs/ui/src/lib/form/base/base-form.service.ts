import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";

import { BaseStoreService } from "@todo/store";

export class BaseFormService<TForm extends object, TStore extends object> {
  private formGroup: FormGroup;

  private subscription: Subscription;

  constructor(
    private readonly form: TForm,
    private readonly store: BaseStoreService<TStore>
  ) {
    this.formGroup = new FormBuilder().group(form);
    this.store.setModel(this.formGroup.value);
    this.subscription = this.store.getModel().subscribe(model => {
      this.formGroup.patchValue(model);
    });
  }

  getFormGroup() {
    return this.formGroup;
  }

  unsubscribeFormGroup() {
    this.subscription.unsubscribe();
  }

  isValidField(field: string) {
    return this.formGroup.get(field)?.valid;
  }

  isNotValidField(field: string) {
    return !this.isValidField(field);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
