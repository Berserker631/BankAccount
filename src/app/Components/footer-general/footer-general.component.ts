import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-general',
  templateUrl: './footer-general.component.html',
  styleUrls: ['./footer-general.component.scss']
})
export class FooterGeneralComponent {
  constructor(private router: Router){}

  NavigateHome(){
    this.router.navigate(['homeLayout'])
  }

  NavigateRequest(){
    this.router.navigate(['requests'])
  }
}
