import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.scss']
})
export class OptionMenuComponent {
  constructor(private router: Router) { }

  NavigateRequest() {
    this.router.navigate([''])
  }

  NavigateAccounts() {
    this.router.navigate(['homeLayout'])
  }

  NavigateHistory() {
    this.router.navigate(['requestMenu/requestHistory'])
  }
}
