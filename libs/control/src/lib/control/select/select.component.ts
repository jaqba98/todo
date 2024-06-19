import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
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

  @Input() isRequired: boolean;

  isOpened: boolean;

  onChange: OnChangeType<string> = (value: string) => {
    return value;
  };

  onTouch: OnTouchType = () => {
    return;
  };

  constructor(private readonly renderer: Renderer2) {
    this.label = "";
    this.isError = false;
    this.value = "";
    this.options = [];
    this.isOpened = false;
    this.isRequired = false;
  }

  onClick() {
    this.isOpened = !this.isOpened;
    this.isOpened ?
      this.button.nativeElement.focus() :
      this.button.nativeElement.blur();
  }

  onBlur(): void {
    this.renderer.listen("document", "click", (click: Event) => {
      const el = click.target as HTMLElement;
      console.log(el.classList);
      if (el.classList.contains("select__control")) {
        this.button.nativeElement.blur();
        return;
      }
      this.isOpened = false;
    });
  }

  onClickOption(option: string) {
    this.value = option;
    this.isOpened = false;
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
