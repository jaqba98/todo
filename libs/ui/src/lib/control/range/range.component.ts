import { Component, Input, forwardRef } from "@angular/core";

import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { OnChangeType, OnTouchType } from "../../type/accessor.type";

@Component({
  selector: "lib-range",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./range.component.html",
  styleUrl: "./range.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent {
  @Input()
    value = "";

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
}
