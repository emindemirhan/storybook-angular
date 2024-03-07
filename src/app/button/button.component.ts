import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() content: number = 0;
  @Output() contentChange = new EventEmitter<number>();
  @Input() contentColor: string = 'red';
  increase() {
    this.content += 1;
    this.emitChange();
  }

  decrease() {
    if (this.content > 0) {
      this.content -= 1;
      this.emitChange();
    }
  }

  private emitChange() {
    this.contentChange.emit(this.content);
  }
}
