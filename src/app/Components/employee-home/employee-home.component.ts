import { Component } from '@angular/core';
import { DataServiceService } from '../../Services/data-service.service';
import { Router } from '@angular/router';
import { account } from 'src/app/Interface/account-interface';
import { accountDetail } from 'src/app/Interface/account-detail-interface';
import { CookiesService } from 'src/app/Services/cookie.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent {
  accountData: any = [];
  constructor(private dataService: DataServiceService, private router: Router, private cookieService: CookiesService) { }

  SendNewItem(account: account, detail: accountDetail) {
    const route: string = 'accountDetail';
    let selectedAccountDetail = JSON.stringify(detail);
    let selectedAccount = JSON.stringify(account);
    localStorage.setItem('account', selectedAccount);
    localStorage.setItem('accountDetail', selectedAccountDetail);
    this.router.navigate(['accountDetail']);
  }

  ngOnInit() {
    this.accountData = this.dataService.getAccountData();
  }
}
