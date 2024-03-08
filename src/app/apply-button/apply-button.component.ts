import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss'],
})
export class ApplyButtonComponent {
  @Input() buttonText: string = 'Apply';
  @Input() buttonTextColor: string = 'white';
  @Input() buttonFontSize: string = '16px';

  @Output() applyClick = new EventEmitter<void>();

  onApplyClick() {
    this.applyClick.emit();
  }
}
