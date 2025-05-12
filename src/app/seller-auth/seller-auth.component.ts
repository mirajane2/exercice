
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUp } from '../interface/data-Types';
import { SellerService } from '../services/sellerService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  showLogin=false;
  authError:String='';
  constructor(
    private service : SellerService) {}

  ngOnInit(): void {
    this.service.reloadSeller()
  }

  signUp(data: SignUp): void {
    console.warn(data);
    this.service.userSignUp(data);
  }
  login(data: SignUp): void {
    this.service.userLogin(data);
    this.service.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
