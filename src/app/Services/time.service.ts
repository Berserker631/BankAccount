import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time = new Date();
  constructor() { }

  getCurrentTime(): number{
    return this.time.getHours();
  }
}
