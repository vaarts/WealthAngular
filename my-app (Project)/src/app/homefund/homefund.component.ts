import { FundService } from './../services/fund.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homefund',
  templateUrl: './homefund.component.html',
  styleUrls: ['./homefund.component.css']
})
export class HomefundComponent implements OnInit {

  constructor(public fundService : FundService) { }

  findByAmc(fundAmc: string){
    this.fundService.getAllByFundAmc(fundAmc);
  }

  ngOnInit(): void {
    this.fundService.getFunds();
    this.fundService.getFundAmc();
  }

}
