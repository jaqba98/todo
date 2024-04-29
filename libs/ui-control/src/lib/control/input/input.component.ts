import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputType } from '../../type/control.type';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() type: InputType = 'text';
  
  @Input() event = new EventEmitter<string>();

  value = '';

  onInput() {
    this.event.emit(this.value);
  }
}
