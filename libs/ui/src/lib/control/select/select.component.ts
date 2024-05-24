import { CommonModule } from "@angular/common";
import { Component, Input, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { OnChangeType, OnTouchType } from "../../type/accessor.type";

@Component({
  selector: "lib-select",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./select.component.html",
  styleUrls: [
    "../control.scss",
    "./select.component.scss"
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent {
  @Input() options: string[] = [];

  @Input() value = "";

  @Input() label = "";

  isSelected = false;

  isOpened = false;

  onClick() {
    this.isOpened = !this.isOpened;
  }

  onBlur() {
    this.isOpened = false;
  }

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

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.onChange(select.value);
  }
}
