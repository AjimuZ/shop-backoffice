import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  imports: [CommonModule],
  templateUrl: './alert-popup.component.html',
  styleUrl: './alert-popup.component.scss',
})
export class AlertPopupComponent {
  isVisible = false;
  alertMessage = '';

  showAlert(message: string): void {
    this.alertMessage = message;
    this.isVisible = true;
  }

  closeAlert(): void {
    this.isVisible = false;
  }
}
