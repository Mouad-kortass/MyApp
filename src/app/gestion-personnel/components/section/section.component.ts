import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GestionUnites } from 'src/app/gestion-unites/models/gestion_unites.model';
import { Section } from '../../models/Section.model';
import { SectionService } from '../../Services/Section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  //sections$! : Observable<Section[]>;
  code:string=''
  list : any
  MotCle!:string
  select:number[]=[]
  unite1!:GestionUnites
  constructor(private service:SectionService,private roter:Router,private activateroute:ActivatedRoute) {

    this.code=this.activateroute.snapshot.params['code']
   }

  ngOnInit(): void {
    
   

    

    this.MotCle=''
  

    this.service.Getunites(parseInt(this.code)).subscribe(
      data=>this.unite1=data

      
    )

    this.service.GetAllUnitesByCode(this.code)
    .subscribe(
     
     (data:any)=>{
      if(this.code=='1')
      this.list=data._embedded.unite1s
      if(this.code=='2')
      this.list=data._embedded.unite2s
      if(this.code=='3')
      this.list=data._embedded.unite3s
    
     }
     )
    
  }

  delete(p:number){
      this.service.delete(p,this.code).subscribe(data=>
   this.ngOnInit()
        )
      
  }
  update(code:number){
    this.roter.navigateByUrl('/collaborateur/UNAF_E/unite'+this.code+'/'+code)
  }
  add(){
    this.roter.navigateByUrl('/collaborateur/UNAF_A/'+this.code)
  }

  search(){
    this.service.FindSectionByMc(this.MotCle,this.code).subscribe(
      (data:any)=>{
        if(this.code=='1')
        this.list=data._embedded.unite1s
        if(this.code=='2')
        this.list=data._embedded.unite2s
        if(this.code=='3')
        this.list=data._embedded.unite3s
      }
    )
  }
  check(code:number){

    let index
   index=this.select.findIndex(per=>per===code)
   if(index==-1)
   {
    this.select.push(code);
   }
   else{

    this.select=this.select.filter(p=>p!==code)
  }
  console.log(this.select);
    
  }
  DeleteAll(){
    for(let s of this.select){
      this.service.delete(s,this.code).subscribe(
        data=>console.log('ok')
             )
             this.ngOnInit()

    }
    
  }

    
 

}
