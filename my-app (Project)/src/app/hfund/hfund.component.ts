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

  findByFhTotal(fhTotal : number){
    this.fundService.getByReturn(fhTotal);
    
  }

  findByAum(fundAum : number){
    this.fundService.getByAum(fundAum);
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

  findById(fundId: number){
    this.fundService.getByFundId(fundId);
  }

  ngOnInit(): void {
    this.fundService.getFunds();
    
    this.fundService.getFundAmc();
    this.fundService.getFundRisk();

  }
}
