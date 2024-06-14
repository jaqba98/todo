import {
  Component,
  forwardRef,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from "@angular/forms";

import { OnChangeType, OnTouchType } from "../../type/accessor.type";
import { LabelComponent } from "../label/label.component";

@Component({
  selector: "lib-textarea",
  standalone: true,
  imports: [FormsModule, LabelComponent],
  templateUrl: "./textarea.component.html",
  styleUrl: "./textarea.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @ViewChild("textarea", { static: false })
    input!: ElementRef<HTMLElement>;

  @Input({ required: true }) label: string;

  @Input() value: string;

  @Input() isSelected: boolean;

  @Input() isError: boolean;

  @Input() height: string;

  @Input() isRequired: boolean;

  onChange: OnChangeType<string> = (value: string) => {
    return value;
  };

  onTouch: OnTouchType = () => {
    return;
  };

  constructor() {
    this.label = "";
    this.value = "";
    this.isSelected = false;
    this.isError = false;
    this.height = "100px";
    this.isRequired = false;
  }

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

  onBlur() {
    this.isSelected = false; 
  }
}
