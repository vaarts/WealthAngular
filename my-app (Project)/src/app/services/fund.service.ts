import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  funds:Fund[];
  fundsAmc:Fund[];
  constructor(public http: HttpClient) { 
    this.funds=[];
    this.fundsAmc=[];
  }

  getAllByFundAmc(){
    this.http.get<Fund[]>('http://localhost:8080/fundAllAmc').subscribe((res)=>{
      this.funds = res;
    });
  }

  getFundAmc(){
    this.http.get<Fund[]>('http://localhost:8080/fundAmc').subscribe((res)=>{
      this.fundsAmc = res;
    });
  }

  getFunds(){
    this.http
      .get<Fund[]>('http://localhost:8080/funds/all')
      .subscribe((res) => {
        this.funds = res;
      });
  }
}