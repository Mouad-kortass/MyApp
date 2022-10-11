import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { map, Observable } from 'rxjs';
import { __values } from 'tslib';
import { personnel } from '../../models/personnel.model';
import { Section } from '../../models/Section.model';
import { PersonnelService } from '../../Services/personnel.service';
import { SectionService } from '../../Services/Section.service';

@Component({
  selector: 'app-liste-personnel',
  templateUrl: './liste-personnel.component.html',
  styleUrls: ['./liste-personnel.component.css']
})
export class ListePersonnelComponent implements OnInit {


  liste_p! :personnel[];
  FormPersonne!:FormGroup;
  personne! :personnel;
  MotCle='';
  disabledForm!:boolean;
  disabledMatricule!:boolean;
  NouveauPersonne!:personnel;
  sections! : Section[]
  pattern="[a-z]"
  managers:any
  unite1:any
  unite2:any
  unite3:any

  constructor(private PersonnelService:PersonnelService,public router:Router,public formbuilder:FormBuilder
    ,public activatroute:ActivatedRoute,public SectionService:SectionService) { }
  

  ngOnInit(): void {
   this.disabledForm=true
   this.disabledMatricule=true
 
  this.sections = this.SectionService.GetAllSection();
  this.liste_p = this.PersonnelService.GetAllPersonnel();
 
    

  this.personne = this.PersonnelService.GetFirstPersonne();


  

   this.FormPersonne = this.formbuilder.group({
    matricule: this.personne.Matricule,
    nom:this.personne.Nom,
    prenom:this.personne.Prenom,
    un1:this.personne.un1,
    un2:this.personne.un2,
    un3:this.personne.un3,
    mng:this.personne.MNG,
    profil:this.personne.profil,
    cin:this.personne.cin,
    email:this.personne.Email,
    date_e:this.personne.date_embauche
   })

this.SectionService.GetAllUnitesByCode('1').subscribe(
  (data:any)=>this.unite1=data._embedded.unite1s
)
this.SectionService.GetAllUnitesByCode('2').subscribe(
  (data:any)=>this.unite2=data._embedded.unite2s
)
this.SectionService.GetAllUnitesByCode('3').subscribe(
  (data:any)=>this.unite3=data._embedded.unite3s
)
this.PersonnelService.GetAllManagers().subscribe(
  (data:any)=>this.managers=data._embedded.manangers
)

  }


  GoToPersenne(id:String){

    this.disabledMatricule=true;
    this.disabledForm=true
    this.personne = this.PersonnelService.getPersonneById(id);
    this.FormPersonne = this.formbuilder.group({
      matricule: this.personne.Matricule,
      nom:this.personne.Nom,
      prenom:this.personne.Prenom,
      un1:this.personne.un1,
    un2:this.personne.un2,
    un3:this.personne.un3,
    mng:this.personne.MNG,
    profil:this.personne.profil,
    cin:this.personne.cin,
    email:this.personne.Email,
    date_e:this.personne.date_embauche
    });
  }



  Search(){
this.liste_p = this.PersonnelService.GetPersonneByMotCle(this.MotCle);
   
  }
  OnDeletePersonne(){

  this.PersonnelService.DeletePersonne(this.FormPersonne.value.matricule);
  console.log(this.FormPersonne.value.matricule)
  this.ngOnInit()

  }

  update(b:boolean){
    this.disabledForm=b

    ///retourner au premier en cas d'annulation d'ajout
   if(!this.disabledMatricule)
   this.ngOnInit()
    
  }

  UpdatePersonne()
  {
    
    this.disabledForm=true;
    this.personne.Nom=this.FormPersonne.value.nom;
    this.personne.Prenom=this.FormPersonne.value.prenom;
    this.personne.un1=this.FormPersonne.value.section;
    this.PersonnelService.UpdatePersonne(this.personne);
  }

  AddPersonne(){

  }

  OnAddPersonne(){
    this.disabledForm=false;
    this.disabledMatricule=false;
    this.FormPersonne = this.formbuilder.group({
      matricule: [null],
      nom:[null],
      prenom:[null],
      section:[null]
    });
  }

  OnValide(){
    if(this.disabledMatricule){
    this.UpdatePersonne();
    console.log('update')
    }
    else if(!this.disabledMatricule){
     // this.NouveauPersonne = new personnel(this.FormPersonne.value.matricule,this.FormPersonne.value.nom,this.FormPersonne.value.prenom,this.FormPersonne.value.section)
      
      this.PersonnelService.AddPersonne(this.NouveauPersonne)
      console.log(this.NouveauPersonne)
      this.ngOnInit()
    }
  }





}
