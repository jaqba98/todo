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

  @ViewChild("selectOptionsContent", { static: false })
    selectOptionsContent!: ElementRef<HTMLElement>;
  
  @Input() label = "";

  @Input() value = "";

  @Input() options: string[] = [];

  isOpened = false;

  private mouseX = 0;
  
  private mouseY = 0;

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  onClick() {
    this.isOpened = true;
    this.button.nativeElement.focus();
  }

  onBlur() {
    const element = this.selectOptionsContent.nativeElement;
    const rect = element.getBoundingClientRect();
    if (this.mouseX >= rect.left && this.mouseX <= rect.right) {
      if (this.mouseY >= rect.top && this.mouseY <= rect.bottom) {
        this.button.nativeElement.focus();
        return;
      } 
    }
    this.isOpened = false;
  }

  onClickOption(option: string) {
    this.value = option;
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
}
