import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputType, OnChange, OnTouch } from "../../type/control.type";

@Component({
  selector: "lib-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputType = "text";

  @Input() placeholder = "";

  value = "";

  onChange: OnChange<string> = () => {};
  
  onTouched: OnTouch = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: OnChange<string>): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: OnTouch): void {
    this.onTouched = fn;
  }

  onInput(): void {
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
