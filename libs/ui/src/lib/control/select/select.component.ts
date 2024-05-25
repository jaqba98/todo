import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, Input, ViewChild, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

import { OnChangeType, OnTouchType } from "../../type/accessor.type";
import { LabelComponent } from "../label/label.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "lib-select",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    ButtonComponent
  ],
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
  @ViewChild("labelRef", { static: false }) labelRef!: ElementRef<HTMLElement>;

  @ViewChild("button", { static: false }) button!: ElementRef<HTMLElement>;

  @ViewChild("selectOptionsContent", { static: false }) selectOptionsContent!: ElementRef<HTMLElement>;
  
  @Input() id = "";

  @Input() label = "";

  @Input() options: string[] = [];

  @Input() value = "";

  isSelected = false;

  isOpened = false;

  onClick() {
    this.isOpened = !this.isOpened;
    this.isOpened ?
      this.button.nativeElement.focus():
      this.button.nativeElement.blur();
  }

  onBlur() {
    // this.isOpened = false;
  }

  @HostListener("click", ["$event"])
  onClick2(event: MouseEvent) {
    if (event.target === this.selectOptionsContent.nativeElement) return;
    if (event.target === this.button.nativeElement) return;
    if (event.target === this.labelRef.nativeElement) return;
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
