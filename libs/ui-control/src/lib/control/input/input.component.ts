import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html'
})
export class UiControlComponent {
  @Input() type: unknown;
}
