import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authentificationService } from '../../Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!:FormGroup;
  message!:string;

  constructor(private fb:FormBuilder,public auth:authentificationService,private router:Router) { }

  ngOnInit(): void {
this.LoginForm = this.fb.group({
  login:[null],
  password:[null]
})

  }

  login(){
 if(!this.auth.Login(this.LoginForm.value.login,this.LoginForm.value.password))
 {
this.message='Identifiant ou Mot de passe incorrect'
this.LoginForm = this.fb.group({
  login:[null],
  password:[null]
})
 }
 if(this.auth.Login(this.LoginForm.value.login,this.LoginForm.value.password))
 {
this.router.navigateByUrl('/collaborateur/personnel')
 }


  }

}
