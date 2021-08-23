import { Router } from '@angular/router';
import { Fund } from './../model/fund';
import { FundService } from './../services/fund.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  userName:string;
  fund:Fund;
  fundId:number;
  constructor(public auth: AuthService, public fundService:FundService, public router:Router) { 
    this.userName='';
    this.fund= new Fund;
    this.fundId=0;
  }

  

  ngOnInit(): void {  }

  navauth(){
    if (this.auth.currentUser.userEmail == ''){
      return true
    }
    else{
      return false
    }
  }

  searchFund(name:string){
    this.fundService.getAllByFundAmc(name);
    this.router.navigateByUrl('/funds/' + name );
  }
  

}
