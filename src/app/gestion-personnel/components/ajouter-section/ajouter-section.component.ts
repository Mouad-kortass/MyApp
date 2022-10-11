import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionUnites } from 'src/app/gestion-unites/models/gestion_unites.model';
import { unite } from 'src/app/gestion-unites/models/unite.model';
import { Section } from '../../models/Section.model';
import { SectionService } from '../../Services/Section.service';

@Component({
  selector: 'app-ajouter-section',
  templateUrl: './ajouter-section.component.html',
  styleUrls: ['./ajouter-section.component.css']
})
export class AjouterSectionComponent implements OnInit {

  //section : Section ={code_u:10,designation_u:'kkk'}
  section : unite ={code_u:0,designation:'kkk'}
  formSection!:FormGroup;
  uf!:string;
  unites!:unite[];
  message!:string;
  code!:string
  uniteselected!:GestionUnites


  constructor(private service:SectionService,private fb:FormBuilder,public router:ActivatedRoute,private R:Router) { 
    this.code=router.snapshot.params['code']
    this.uf ='unite'+this.code
  }


  ngOnInit(): void {

    this.service.Getunites(parseInt(this.code)).subscribe(
      data=>this.uniteselected=data

      
    )


this.service.all().subscribe(
  data=>this.unites=data
)
 

    this.formSection = this.fb.group({
      code : this.router.snapshot.params['id'],
      designation: [null]
    } )

  }

onaddSection(){
this.section.code_u = parseInt(this.formSection.value.code);
this.section.designation=this.formSection.value.designation;
/**const index = this.unites.findIndex(u=>u.code_u===this.section.code_u)

if(index){
 this.service.OnaddSection(this.section).subscribe(
  data=>this.R.navigateByUrl('collaborateur/section')
   ) 
}
else{
  console.log('erreur')
}**/
let u
this.service.findUniteById(this.section.code_u).subscribe(
  data=>this.message='code existe deja !',
  err=>{if(this.section.code_u){
    this.service.OnaddSection(this.section,this.uf).subscribe(
     data=>this.R.navigateByUrl('collaborateur/UNAF/'+this.code)
      ) }}
  )

  


}

Annuler(){
  this.R.navigateByUrl('collaborateur/section')
}
}
