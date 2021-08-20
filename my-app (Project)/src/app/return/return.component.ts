import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor(public fundService: FundService) {
   }


  fundsAndHistory(){
    this.fundService.getFundAndHistory();
    
  }

  

  ngOnInit(): void {
    this.fundService.getFundAndHistory();
  }
}
