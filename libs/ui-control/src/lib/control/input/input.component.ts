import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html'
})
export class UiControlComponent {
  // TODO: create a type of input control
  @Input() type: unknown;
  
  @Input() event = new EventEmitter<string>();

  value = '';

  onInput() {
    this.event.emit(this.value);
  }
}
