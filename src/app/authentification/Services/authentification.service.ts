import { Injectable } from "@angular/core";
import { User } from "../models/User.model";

@Injectable({
    providedIn:'root'
})

export class authentificationService{

Users : User[] =[
    {id:'1',nom:'user1',login:'user1',password:'123'},
    {id:'2',nom:'master',login:'master',password:'1234567'},
    {id:'3',nom:'Mouad kortass',login:'mouad',password:'123'},
];

UserAuthentification : User  | undefined;



Login(login:string,password:string) : boolean{
    this.UserAuthentification = this.Users.find(u =>u.login==login && u.password==password)
    if(!this.UserAuthentification)
    {
        return false
    }
    localStorage.setItem('aith',JSON.stringify({username:this.UserAuthentification.login,jwt:"jwt_token"}))
    return true
}

isconnected(){
    return this.UserAuthentification;
}

GetUserName(){
    return this.UserAuthentification?.nom;
}

}