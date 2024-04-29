import { Component, Input } from '@angular/core';
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
  
  value = '';

  onInput() {
    console.log(this.value);
  }
}
