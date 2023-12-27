import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}
  private componentChangeSubject = new Subject<void>();

  componentChange$ = this.componentChangeSubject.asObservable();

  triggerComponentChange(){
    this.componentChangeSubject.next();
  }

  getMovementDetail() {
    return [
      {
        subject: 'Planilla',
        accountBalance: 115.38,
        movementNumber: 'P00001-062024',
        movementDate: '12/06/2024',
        accountNumber: 1,
        coinType: 0
      },
      {
        subject: 'Planilla',
        accountBalance: -115,
        movementNumber: 'P00001-122024',
        movementDate: '06/06/2024',
        accountNumber: 1,
        coinType: 0
      },
      {
        subject: 'Planilla',
        accountBalance: 115.38,
        movementNumber: 'P00002-122024',
        movementDate: '19/06/2024',
        accountNumber: 1,
        coinType: 0
      },
      {
        subject: 'Planilla',
        accountBalance: -115,
        movementNumber: 'P00001-122024',
        movementDate: '19/06/2024',
        accountNumber: 1,
        coinType: 0
      },
      {
        subject: 'Deposito',
        accountBalance: 1200,
        movementNumber: 'P00001-122024',
        movementDate: '06/06/2024',
        accountNumber: 2,
        coinType: 1
      },
    ];
  }

  getAccountData() {
    return [
      {
        accountType: 'Cuentas Personales',
        userName: 'Mario Gonzalez',
        employeeCode: '290-00000',
        accountBalance: 115.38,
        description: 'RD-Cuenta',
        movementType: 1,
        accounts: [
          {
            employeeCode: '290-00000',
            accountBalance: 0.76,
            description: 'RD-Cuenta',
            coinType: 0,
            accountNumber: 1,
            movementType: 1
          },
          {
            employeeCode: '290-00000',
            accountBalance: 1200.0,
            description: 'RD-Cuenta',
            coinType: 1,
            accountNumber: 2,
            movementType: 1
          },
          {
            employeeCode: '290-00000',
            accountBalance: 100.0,
            description: 'NI-Cuenta',
            coinType: 0,
            accountNumber: 3,
            movementType: 1
          },
        ],
      },
      {
        accountType: 'Adelantos',
        userName: 'Mario Gonzalez',
        employeeCode: '290-00000',
        accountBalance: 115.38,
        description: 'RD-Adelanto',
        movementType: 2,
        accounts: [
          {
            employeeCode: '290-00000',
            accountBalance: 200,
            description: 'RD-Adelanto',
            coinType: 0,
            accountNumber: 4,
            movementType: 2
          },
          {
            employeeCode: '290-00000',
            accountBalance: 3000,
            description: 'RD-Adelanto',
            coinType: 1,
            accountNumber: 5,
            movementType: 2
          },
        ],
      },
    ];
  }
}
