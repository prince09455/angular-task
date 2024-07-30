import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SuccessPopupComponent } from './components/success-popup/success-popup.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, SuccessPopupComponent, NavComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
