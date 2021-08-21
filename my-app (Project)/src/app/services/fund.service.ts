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
  fundHistory:any;
  fundDetails:any;

  constructor(public http: HttpClient) { 
    this.funds=[];
    this.fundsAmc=[];
    this.fundsRisk=[];
    this.fundHistory=[];
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

  getByReturn(fhTotal :number){
    this.http.get<Fund[]>('http://localhost:8080/fundsReturn/'+ fhTotal).subscribe((res)=>{
      this.funds = res;
    });
  }

  getByAum(fundAum :number){
    this.http.get<Fund[]>('http://localhost:8080/fundsAum/'+ fundAum).subscribe((res)=>{
      this.funds = res;
      console.log(res)
    });
  }


  getFundAmc(){
    this.http.get<string[]>('http://localhost:8080/fundAmc').subscribe((res)=>{
      this.fundsAmc = res;
      
    });
  }

  getFundRisk(){
    this.http.get<string[]>('http://localhost:8080/fundRisk').subscribe((res)=>{
      this.fundsRisk = res;

    });
  }

  getFunds(){
    this.http
      .get<any>('http://localhost:8080/funds/all')
      .subscribe((res) => {
        this.funds = res;
      });
  }


  getFundAndHistory(){
    this.http
      .get<Fund[]>('http://localhost:8080/funds/all/join')
      .subscribe((res) => {
        this.fundHistory = res;
        console.log(this.fundHistory)
      });
  }


  getByFundId(fundId :number){
    this.http.get<Fund[]>('http://localhost:8080/fundsById/'+ fundId).subscribe((res)=>{
      this.fundDetails = res;
      console.log(res)
    });
  }

 


}