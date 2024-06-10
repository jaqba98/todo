import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  forwardRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { OnChangeType, OnTouchType } from "../../type/accessor.type";
import { LabelComponent } from "../label/label.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "lib-select",
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    ButtonComponent
  ],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent {
  @ViewChild("button", { static: false })
    button!: ElementRef<HTMLElement>;

  @ViewChild("selectOptionsButtons", { static: false })
    selectOptionsButtons!: ElementRef<HTMLElement>;
  
  @Input() label: string;

  @Input() isError: boolean;

  @Input() value: string;

  @Input() options: string[];

  isOpened: boolean;

  private mouseX: number;
  
  private mouseY: number;

  onChange: OnChangeType<string> = (value: string) => {
    return value;
  };

  onTouch: OnTouchType = () => {
    return;
  };

  constructor() {
    this.label = "";
    this.isError = false;
    this.value = "";
    this.options = [];
    this.isOpened = false;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  onClick() {
    this.isOpened = !this.isOpened;
    this.isOpened ?
      this.button.nativeElement.focus() :
      this.button.nativeElement.blur();
  }

  onBlur() {
    const element = this.selectOptionsButtons.nativeElement;
    const rect = element.getBoundingClientRect();
    if (this.mouseX >= rect.left && this.mouseX <= rect.right) {
      if (this.mouseY >= rect.top && this.mouseY <= rect.bottom) {
        this.isOpened = true;
        this.button.nativeElement.focus();
        return;
      }
    }
    this.isOpened = false;
    this.button.nativeElement.blur();
  }

  onClickOption(option: string) {
    this.value = option;
    this.isOpened = false;
    this.button.nativeElement.blur();
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
}
