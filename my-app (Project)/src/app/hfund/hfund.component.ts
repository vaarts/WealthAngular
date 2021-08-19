import { Component, OnInit } from '@angular/core';
import { Fund } from '../model/fund';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-hfund',
  templateUrl: './hfund.component.html',
  styleUrls: ['./hfund.component.css']
})
export class HFundComponent implements OnInit {
  
  constructor(public fundService: FundService) {
    fundService.getFunds();

  }


  ngOnInit(): void {
  }
}
