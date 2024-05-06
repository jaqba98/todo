import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { OnChangeType, OnTouchType } from "../../type/form.type";

@Component({
  selector: "lib-select",
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: "./select.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: string[] = [];

  value = "";

  onChange: OnChangeType<string> = () => {};
  
  onTouched: OnTouchType = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeType<string>): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: OnTouchType): void {
    this.onTouched = fn;
  }

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.onChange(select.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
