import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

import { InputType } from "../../type/control.type";
import {
  OnChangeType,
  OnTouchType
} from "../../type/accessor.type";
import { LabelComponent } from "../label/label.component";

@Component({
  selector: "lib-input",
  standalone: true,
  imports: [
    FormsModule,
    LabelComponent
  ],
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
  @ViewChild("input", { static: false }) input!: ElementRef<HTMLElement>;
  
  @Input() type: InputType = "text";

  @Input() label = "";

  @Input() value = "";

  isSelected = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: OnChangeType<string> = (_value: string) => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
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

  onClick() {
    this.input.nativeElement.focus();
    this.isSelected = true;
  }
}
