import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { demande } from '../../models/demande.model';
import { DemandeService } from '../../services/demande.service';

@Component({
  selector: 'app-nouvelle-demande',
  templateUrl: './nouvelle-demande.component.html',
  styleUrls: ['./nouvelle-demande.component.css']
})
export class NouvelleDemandeComponent implements OnInit {

DemandeForm!:FormGroup
Demande:demande={
  code_demande:1,
  demandeur:10,
  manager:10,
  code_abs:1,
  date_debut:'01/01/2022',
  date_fin:'01/01/2022',
  heure_debut:'',
  heure_fin:'',
  date_validation:'',
  date_demande:'',
  etat:'V'
}
liste!:demande[]
  constructor(private formbuilder:FormBuilder,public DemandeService:DemandeService) { }

  ngOnInit(): void {



    this.DemandeForm = this.formbuilder.group({

     code_demande:1,
     demandeur:'mouad',
     manager:'hhh',
     code_abs:'01/01/2022',
     date_debut:'01/02/2022',
     date_fin:'',
     heure_debut:[null],
     heure_fin:[null],
     date_demande:[null],
     date_validation:[null],
     etat:[null]

    })

    this.liste=this.DemandeService.GetAllDemande();


  }
  NewDemande()
  {
   
    this.DemandeService.NewDemande().subscribe(
      data=>console.log('ok'),
      err=>console.log(err))
   //console.log(this.Demande)

  }

  log(){


  }


}
