import { Component } from '@angular/core';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css'],
})
export class SuccessPopupComponent {
  visible = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
