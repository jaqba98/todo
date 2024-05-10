import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputType } from "../../type/control.type";
import { OnChangeType, OnTouchType } from "../../type/accessor.type";

@Component({
  selector: "lib-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
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

  @Input() value = "";

  onChange: OnChangeType<string> = (_value: string) => {};

  onTouch: OnTouchType = () => {};

  writeValue(value: string) {
    this.value = value;
  }
  
  registerOnChange(fn: OnChangeType<string>): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: OnTouchType): void {
    this.onTouch = fn;
  }

  onInput() {
    this.onChange(this.value);
  }
}
