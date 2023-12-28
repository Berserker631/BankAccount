import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EmployeeApp';
  showSplash: boolean = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.showSplash = !this.showSplash;
    }, 2300)
  }
}
