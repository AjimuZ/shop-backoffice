import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';
import { ErrorPropagationService } from '../../services/error-propagation.service';

@Component({
  selector: 'app-error-interceptor',
  imports: [AlertPopupComponent],
  templateUrl: './error-interceptor.component.html',
  styleUrl: './error-interceptor.component.scss',
})
export class ErrorInterceptorComponent implements OnInit {
  @ViewChild('alertPopup') alertPopup!: AlertPopupComponent;

  constructor(private errorPropagationService: ErrorPropagationService) {}

  ngOnInit() {
    // global subscription to errors
    this.errorPropagationService.errorOccurred.subscribe((message: string) => {
      this.alertPopup.showAlert(message);
    });
  }

}
