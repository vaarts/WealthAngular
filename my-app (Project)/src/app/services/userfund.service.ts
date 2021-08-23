import { UserFund } from './../model/userfund';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserfundService {
  userFund:UserFund[];
  
  constructor(public http: HttpClient) {
    this.userFund=[];
   }

   addUserFund(userFund:any){
      return this.http.post<UserFund>('http://localhost:8080/userfund/add', userFund);
   }
}
