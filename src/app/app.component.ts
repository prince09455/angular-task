import { Component } from '@angular/core';
import { SuccessPopupComponent } from './components/success-popup/success-popup.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  progressVisible = false;
  progressBarVisible = true;
  progress = 0;
  @ViewChild(SuccessPopupComponent) successPopup!: SuccessPopupComponent;
  startProgress() {
    this.progressVisible = true;
    this.progressBarVisible = true;
    this.progress = 0;
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        this.showPopup();
      }
    }, 100);
  }
  showPopup() {
    if (this.successPopup) {
      this.successPopup.show();
    }
  }
  toggleProgressBar() {
    this.progressBarVisible = !this.progressBarVisible;
  }
}
