import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";

import { BaseStoreService } from "@todo/store";
import { ColorEnum } from "@todo/control";

export class BaseFormService<
  TForm extends object,
  TStore extends object
> {
  private formGroup: FormGroup;

  private sub: Subscription;

  protected isSubmitted: boolean;

  constructor(
    protected readonly form: TForm,
    protected readonly store: BaseStoreService<TStore>
  ) {
    this.formGroup = new FormBuilder().group(form);
    this.store.emitModel(this.formGroup.value);
    this.sub = this.store.getModel()
      .subscribe(model => this.formGroup.patchValue(model));
    this.isSubmitted = false;
  }

  getFormGroup() {
    return this.formGroup;
  }

  getFormGroupValue() {
    return <TStore>this.formGroup.value;
  }

  unsubscribeFormGroup() {
    this.sub.unsubscribe();
  }

  isFieldValid(field: string) {
    return this.formGroup.get(field)?.valid;
  }

  isFieldNotValid(field: string) {
    return !this.isFieldValid(field);
  }

  getColorError() {
    return ColorEnum.colorError;
  }
}
