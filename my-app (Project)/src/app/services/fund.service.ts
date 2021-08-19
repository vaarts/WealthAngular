import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  funds:Fund[];
  constructor(public http: HttpClient) { 
    this.funds=[];
  }

  getFunds(){
    this.http
      .get<Fund[]>('http://localhost:8080/funds/all')
      .subscribe((res) => {
        this.funds = res;
      });
  }
}