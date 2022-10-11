import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { SectionService } from 'src/app/gestion-personnel/Services/Section.service';
import { GestionUnites } from '../../models/gestion_unites.model';

@Component({
  selector: 'app-gestion-unites',
  templateUrl: './gestion-unites.component.html',
  styleUrls: ['./gestion-unites.component.css']
})
export class GestionUnitesComponent implements OnInit {

  update=0

  disabledForm1=true
  disabledForm2=true
  disabledForm3=true


  unite1!:GestionUnites
  unite2!:GestionUnites
  unite3!:GestionUnites

  UpdateUnite:GestionUnites={code:1,designation:'hhhh',etat:true}
  constructor(private service:SectionService,private route:Router) { }

  ngOnInit(): void {

    this.service.Getunites(1).subscribe(data=>
      this.unite1=data    )
    this.service.Getunites(2).subscribe(data=>
      this.unite2=data    )
    this.service.Getunites(3).subscribe(data=>
      this.unite3=data    )

  }

  Update(code:number){
this.update=code
if(code==1)
{this.disabledForm1=false}
if(code==2)
{this.disabledForm2=false}
if(code==3)
{this.disabledForm3=false}
  }

  annuler(){
    this.update=0
      this.disabledForm1=true
      this.disabledForm2=true
      this.disabledForm3=true
    
  }

  onUpdate(code:number,designation:string,etat:boolean){
    
    this.update=0
    this.annuler();
    this.UpdateUnite.code=code;
    this.UpdateUnite.designation=designation;
    this.UpdateUnite.etat=etat
    this.service.onUpdate(this.UpdateUnite).subscribe(
      data=> this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{

      this.route.navigateByUrl('/collaborateur/gestion_unites')
    })
      
    )
    
    
    


  }
  

  checkValue(event: any){
    console.log(event);
 }

}
