import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../../Services/time.service';

@Component({
  selector: 'app-employees-login',
  templateUrl: './employees-login.component.html',
  styleUrls: ['./employees-login.component.scss']
})
export class EmployeesLoginComponent implements OnInit{
  welcomeMsg: string = '';
  constructor(private router: Router, private time: TimeService){}

  NavigateHome(){
    this.router.navigate(['homeLayout'])
  }

  ngOnInit(){
    if (this.time.getCurrentTime() > 0 && this.time.getCurrentTime() <= 12) {
      this.welcomeMsg = '⛅ Buenos dias'
    }
    else if (this.time.getCurrentTime() > 12 && this.time.getCurrentTime() <= 18) {
      this.welcomeMsg = '☀️ Buenas tardes'
    }
    else if (this.time.getCurrentTime() > 18 && this.time.getCurrentTime() <= 24){
      this.welcomeMsg = '🌙 Buenas noches'
    }
  }
}
