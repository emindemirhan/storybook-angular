import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-menu-button',
  templateUrl: './toggle-menu-button.component.html',
  styleUrls: ['./toggle-menu-button.component.scss'],
})
export class ToggleMenuButtonComponent {
  @Input() homeButtonColor: string = 'blue';
  @Input() menuButtonColor: string = 'green';
  @Input() buttonFontSize: string = '16px';
  @Input() buttonBackGroundColor: string = '#2D333F';

  @Output() homeButtonClick = new EventEmitter<void>();
  @Output() menuToggleButtonClick = new EventEmitter<void>();

  onHomeButtonClick() {
    this.homeButtonClick.emit();
  }

  onMenuToggleButtonClick() {
    this.menuToggleButtonClick.emit();
  }
}
