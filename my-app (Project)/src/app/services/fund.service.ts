import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  funds:Fund[];
  fundsAmc:string[];
  fundsRisk:string[];
  constructor(public http: HttpClient) { 
    this.funds=[];
    this.fundsAmc=[];
    this.fundsRisk=[];
  }

  getAllByFundAmc(fundAmc :string){
    this.http.get<Fund[]>('http://localhost:8080/funds/'+ fundAmc).subscribe((res)=>{
      this.funds = res;
    });
  }

  getAllByFundRisk(fundRisk :string){
    this.http.get<Fund[]>('http://localhost:8080/fundsRisk/'+ fundRisk).subscribe((res)=>{
      this.funds = res;
    });
  }

  getFundAmc(){
    this.http.get<string[]>('http://localhost:8080/fundAmc').subscribe((res)=>{
      this.fundsAmc = res;
      console.log(res)
    });
  }

  getFundRisk(){
    this.http.get<string[]>('http://localhost:8080/fundRisk').subscribe((res)=>{
      this.fundsRisk = res;
      console.log(res)
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