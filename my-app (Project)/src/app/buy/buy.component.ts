import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  date : string = new Date().toDateString();

  constructor(public fundService: FundService) { }

  ngOnInit(): void {
  }

}
