import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { BaseStoreService } from "@todo/store";

export class BaseFormService<TForm extends object, TStore extends object> {
  private baseForm: FormGroup;

  private subscription: Subscription;

  isSubmitted = false;

  constructor(
    private readonly form: TForm,
    private readonly baseStore: BaseStoreService<TStore>
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

  protected destroyForm() {
    this.subscription.unsubscribe();
  }

  protected getInvalidField(field: string) {
    return this.baseForm.get(field)?.invalid && this.isSubmitted;
  }
}
