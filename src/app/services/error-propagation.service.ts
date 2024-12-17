import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorPropagationService {
  constructor() {}

  // global subject to propagate errors
  public errorOccurred = new Subject<string>();

  // method to emit the error
  propagateError(message: string) {
    this.errorOccurred.next(message);
  }
  
}
