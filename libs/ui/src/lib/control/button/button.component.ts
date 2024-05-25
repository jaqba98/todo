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

@Component({
  selector: "lib-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss"
})
export class ButtonComponent {
  @ViewChild("button", { static: false }) button!: ElementRef<HTMLElement>;
  
  @Input() type: ButtonType = "button";

  @Input({ required: true }) value = "";

  @Input() fullSize = false;

  @Input() leftIconVisible = false;

  @Input() leftIconSrc = "";

  @Input() leftIconAlt = "";

  @Input() rightIconVisible = false;

  @Input() rightIconSrc = "";

  @Input() rightIconAlt = "";

  @Output() eventClick = new EventEmitter();

  @Output() eventBlur = new EventEmitter();

  get nativeElement(): HTMLElement {
    return this.button.nativeElement;
  }

  onClick() {
    this.eventClick.emit();
  }

  onBlur() {
    this.eventBlur.emit();
  }
}
