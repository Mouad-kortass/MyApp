import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { unite } from "src/app/gestion-unites/models/unite.model";
import { demande } from "../models/demande.model";


@Injectable({
providedIn:'root'
})

export class DemandeService {

    Demande:demande={
        code_demande:1,
        demandeur:10,
        manager:10,
        code_abs:1,
        date_debut:'',
        date_fin:'',
        heure_debut:'',
        heure_fin:'',
        date_validation:'',
        date_demande:'',
        etat:'V'

      }

    constructor (private http:HttpClient){

    }

    liste_demande : demande[] = [];

    GetAllDemande(){
       return this.liste_demande;
    }

    NewDemande(){

            return this.http.post("http://localhost:8080/tests",this.Demande)
        
    }
}