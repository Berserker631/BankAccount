import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataServiceService } from '../../Services/data-service.service';
import { account } from 'src/app/Interface/account-interface';
import { accountDetail } from 'src/app/Interface/account-detail-interface';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  userData: account;
  accountBalance: number = 0;
  accountDetail: accountDetail[] = [];
  selectedAccount: accountDetail | undefined;

  constructor(private dataService: DataServiceService) {
    this.selectedAccount = {
      accountBalance: 0,
      accountNumber: 0,
      coinType: 0,
      movementDate: '',
      movementNumber: '',
      subject: ''
    }
    this.userData = {
      accountBalance: 0,
      accountType: '',
      description: '',
      userName: '',
      movementType: 0,
      employeeCode: '',
      accounts: []
    }
  }

  GetBalance(){
    this.accountDetail.forEach(element => {
      this.accountBalance += element.accountBalance;
    });
  }

  ngOnInit() {
    let account = localStorage.getItem('account');
    this.userData = JSON.parse(account!);
    let selectedDetail = localStorage.getItem('accountDetail');
    this.selectedAccount = JSON.parse(selectedDetail!)
    this.accountDetail =  this.dataService.getMovementDetail().filter(criteria => criteria.accountNumber === this.selectedAccount?.accountNumber);
    this.GetBalance();
  }
}
