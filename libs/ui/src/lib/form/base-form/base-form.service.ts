import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { BaseFormStoreService } from "@todo/store";

export class BaseFormService<TForm extends object, TStore extends object> {
  private baseForm: FormGroup;

  private subscription: Subscription;

  isSubmitted = false;

  constructor(
    private readonly form: TForm,
    private readonly baseStore: BaseFormStoreService<TStore>
  ) {
    this.baseForm = new FormBuilder().group(this.form);
    this.baseStore.setModel(this.baseForm.value);
    this.subscription = this.baseStore.getModel().subscribe((model) => {
      this.baseForm.patchValue(model);
    });
  }

  protected getForm() {
    return this.baseForm;
  }

  protected onSubmit() {
    console.log(this.baseForm.value);
    this.isSubmitted = true;
    if (this.baseForm.invalid) return;
    this.baseStore.setModel(this.baseForm.value);
    this.baseStore.clearModel();
    this.isSubmitted = false;
  }

  protected destroyForm() {
    this.subscription.unsubscribe();
  }

  protected getInvalidField(field: string) {
    return this.baseForm.get(field)?.invalid && this.isSubmitted;
  }
}
