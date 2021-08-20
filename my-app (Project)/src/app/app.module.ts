import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HFundComponent } from './hfund/hfund.component';
import { FundService } from './services/fund.service';
import { HomefundComponent } from './homefund/homefund.component';
import { WhyvavjaComponent } from './whyvavja/whyvavja.component';
import { FooterComponent } from './footer/footer.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReturnComponent } from './return/return.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'funds',
    component: HFundComponent,
  },
  {
    path:'calculator',
    component: CalculatorComponent,
  },
  {
    path:'return',
    component: ReturnComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    HomeComponent,
    HFundComponent,
    HomefundComponent,
    WhyvavjaComponent,
    FooterComponent,
    CalculatorComponent,
    ReturnComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [FundService],
  bootstrap: [AppComponent],
})
export class AppModule {}