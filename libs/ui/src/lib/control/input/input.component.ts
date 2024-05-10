import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputType } from "../../type/control.type";

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

  onChange: unknown = () => {};

  onTouch: unknown = () => {};

  writeValue(value: string) {
    this.value = value;
  }
  
  registerOnChange(fn: unknown): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: unknown): void {
    this.onTouch = fn;
  }
}
