import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "lib-label",
  standalone: true,
  templateUrl: "./label.component.html",
  styleUrl: "./label.component.scss"
})
export class LabelComponent {
  @Input({ required: true }) value = "";

  @Input() isError = false;

  @Output() event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
