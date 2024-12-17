import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgHttpLoaderComponent } from 'ng-http-loader';
import { ErrorInterceptorComponent } from "./components/error-interceptor/error-interceptor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgHttpLoaderComponent, ErrorInterceptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shop-backoffice';
}
