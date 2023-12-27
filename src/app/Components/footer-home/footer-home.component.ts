import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent {
  constructor(private router: Router){}

  NavigateHome(){
    this.router.navigate(['homeLayout'])
  }

  NavigateRequest(){
    this.router.navigate(['requests'])
  }
}
