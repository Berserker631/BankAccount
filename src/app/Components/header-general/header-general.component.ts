import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from 'src/app/Services/time.service';

@Component({
  selector: 'app-header-general',
  templateUrl: './header-general.component.html',
  styleUrls: ['./header-general.component.scss']
})
export class HeaderGeneralComponent {
  welcomeMsg: string = '';
  constructor(private time: TimeService, private router: Router){}

  NavigateHome(){
    this.router.navigate(['homeLayout'])
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
