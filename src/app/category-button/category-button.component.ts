import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss'],
})
export class CategoryButtonComponent {
  @Input() buttonText: string = 'Category';
  @Input() buttonBackground: string = 'blue';
  @Input() buttonTextColor: string = 'white';
  @Input() buttonFontSize: string = '16px';

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
