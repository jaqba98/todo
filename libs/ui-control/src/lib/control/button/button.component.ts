import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() value = '';
  
  @Output() event = new EventEmitter<boolean>();

  onClick() {
    this.event.emit(true);
  }
}
