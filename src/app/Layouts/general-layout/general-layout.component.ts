import { Component } from '@angular/core';
import { CookiesService } from 'src/app/Services/cookie.service';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent {
  selectedRoute: string = '';
  constructor() { }

}
