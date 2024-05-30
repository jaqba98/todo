import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "lib-label",
  standalone: true,
  templateUrl: "./label.component.html",
  styleUrl: "./label.component.scss"
})
export class LabelComponent {
  @ViewChild("label", { static: false }) label!: ElementRef<HTMLElement>;

  @Input({ required: true }) value = "";

  @Input() isError = false;

  @Output() eventClick = new EventEmitter();

  get nativeElement(): HTMLElement {
    return this.label.nativeElement;
  }

  onClick() {
    this.eventClick.emit();
  }
}
