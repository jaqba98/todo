import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() value = '';
  
  @Output() event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
