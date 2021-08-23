import { UserFund } from './../model/userfund';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserfundService {
  userFund: UserFund[];
  userFundHistory:any
  userId: number;

  constructor(public http: HttpClient) {
    this.userFund = [];
    this.userId = 0;
  }

  getFundHistoryByUserId(userId: number) {
    this.http.get<UserFund[]>('http://localhost:8080/fundsHistoryById/' + userId).subscribe((res) => {
      this.userFundHistory = res;
      console.log(res);
    });
  }

  addUserFund(userFund: any) {
    return this.http.post<UserFund>('http://localhost:8080/userfund/add', userFund);
  }
}
