import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() value = '';
}
