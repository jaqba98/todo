import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";

import { BaseStoreService } from "@todo/store";

export class BaseFormService<TForm extends object, TStore extends object> {
  private formGroup: FormGroup;

  private subscription: Subscription;

  protected isSubmitted = false;

  constructor(
    private readonly form: TForm,
    protected readonly store: BaseStoreService<TStore>
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

  getValue() {
    return <TStore>this.formGroup.value;
  }

  unsubscribeFormGroup() {
    this.subscription.unsubscribe();
  }

  isValidField(field: string) {
    return this.formGroup.get(field)?.valid && this.isSubmitted;
  }

  isNotValidField(field: string) {
    return this.formGroup.get(field)?.invalid && this.isSubmitted;
  }
}
