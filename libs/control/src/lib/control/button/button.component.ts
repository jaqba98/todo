import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonType } from "../../type/control.type";
import { IconComponent } from "../icon/icon.component";
import { TextComponent } from "../text/text.component";
import { ColorEnum } from "../../enum/color.enum";

@Component({
  selector: "lib-button",
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    TextComponent
  ],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss"
})
export class ButtonComponent {
  @ViewChild("button", { static: false })
    button!: ElementRef<HTMLElement>;

  @Input() type: ButtonType;

  @Input({ required: true }) value: string;

  @Input() fullSize: boolean;

  @Input() leftIconVisible: boolean;

  @Input() leftIconSrc: string;

  @Input() leftIconAlt: string;

  @Input() rightIconVisible: boolean;

  @Input() rightIconSrc: string;

  @Input() rightIconAlt: string;

  @Input() isPrimary: boolean;

  @Output() eventClick: EventEmitter<boolean>;

  @Output() eventBlur: EventEmitter<boolean>;

  constructor() {
    this.type = "button";
    this.value = "";
    this.fullSize = false;
    this.leftIconVisible = false;
    this.leftIconSrc = "";
    this.leftIconAlt = "";
    this.rightIconVisible = false;
    this.rightIconSrc = "";
    this.rightIconAlt = "";
    this.isPrimary = false;
    this.eventClick = new EventEmitter<boolean>();
    this.eventBlur = new EventEmitter<boolean>();
  }

  get nativeElement(): HTMLElement {
    return this.button.nativeElement;
  }

  getTextColor(): ColorEnum {
    return this.isPrimary ?
      ColorEnum.colorWhite :
      ColorEnum.colorDefault;
  }

  onClick() {
    this.eventClick.emit();
  }

  onBlur() {
    this.eventBlur.emit();
  }

  disabledIcons() {
    return !this.leftIconVisible
        && !this.rightIconVisible;
  }
}
