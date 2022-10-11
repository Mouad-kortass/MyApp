import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { authentificationService } from '../authentification/Services/authentification.service';
import { SectionService } from '../gestion-personnel/Services/Section.service';
import { GestionUnites } from '../gestion-unites/models/gestion_unites.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

UserName:string|undefined
unite1!:GestionUnites
unite2!:GestionUnites
unite3!:GestionUnites
  constructor(private auth:authentificationService,private service:SectionService) { }


  ngOnInit(): void {

this.UserName =this.auth.GetUserName();

this.service.Getunites(1).subscribe(data=>
  this.unite1=data    )
this.service.Getunites(2).subscribe(data=>
  this.unite2=data    )
this.service.Getunites(3).subscribe(data=>
  this.unite3=data    )

  }

}
