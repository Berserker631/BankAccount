import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from 'src/app/Services/time.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent {
  welcomeMsg: string = '';
  constructor(private time: TimeService, private router: Router){}

  LogOut(){
    this.router.navigate([''])
  }

  ngOnInit(){
    if (this.time.getCurrentTime() >= 0 && this.time.getCurrentTime() <= 12) {
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
