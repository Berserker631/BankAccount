import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private CookieService: CookieService) { }

  // SetCookie(address: string) {
  //   this.CookieService.set('myCookie', address)
  // }

  // GetCookie(): string {
  //   return this.CookieService.get('myCookie');
  // }

  // DeleteCookie(Cookie: string) {
  //   this.CookieService.delete(Cookie)
  // }
}
