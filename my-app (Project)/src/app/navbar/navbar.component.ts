import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  userName:string;
  constructor(public auth: AuthService, ) { 
    this.userName='';
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
 

}
