import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-hfund',
  templateUrl: './hfund.component.html',
  styleUrls: ['./hfund.component.css']
})
export class HFundComponent implements OnInit {

  constructor(public fundService: FundService) {
    

  }

  findByAmc(fundAmc: string){
    this.fundService.getAllByFundAmc(fundAmc);
  }
  
  findByRisk(fundRisk: string){
    this.fundService.getAllByFundRisk(fundRisk);
  }

  fundsAll(){
    this.fundService.getFunds();
  }

  ngOnInit(): void {
    this.fundService.getFunds();
    this.fundService.getFundAmc();
    this.fundService.getFundRisk();
  }
}
