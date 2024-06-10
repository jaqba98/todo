import {
  Component,
  Input,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

import { LabelComponent } from "../label/label.component";
import { OnChangeType, OnTouchType } from "../../type/accessor.type";

@Component({
  selector: "lib-range",
  standalone: true,
  imports: [FormsModule, LabelComponent],
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
export class RangeComponent implements ControlValueAccessor {
  @Input() label: string;

  @Input() isError: boolean;

  @Input() value: number;

  onChange: OnChangeType<string> = (value: string) => {
    return value;
  };

  onTouch: OnTouchType = () => {
    return;
  };

  constructor() {
    this.label = "";
    this.isError = false;
    this.value = 0;
  }

  getLabel() {
    return `${this.label}: ${this.value}%`;
  }

  writeValue(value: number) {
    this.value = value;
  }
  
  registerOnChange(fn: OnChangeType<string>): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: OnTouchType): void {
    this.onTouch = fn;
  }
}
