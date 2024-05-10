import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { OnChangeType, OnTouchType } from "../../type/form.type";

@Component({
  selector: "lib-range",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./range.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements ControlValueAccessor {
  @Input() value = 0;

  onChange: OnChangeType<number> = () => {};
  
  onTouched: OnTouchType = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeType<number>): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: OnTouchType): void {
    this.onTouched = fn;
  }

  onSelect(): void {
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
