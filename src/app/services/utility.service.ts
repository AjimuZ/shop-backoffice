import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  // reload current location
  reloadLocation(): void {
    window.location.reload();
  }
}
