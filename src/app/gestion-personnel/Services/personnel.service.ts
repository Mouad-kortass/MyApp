import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { personnel } from "../models/personnel.model";



@Injectable({
    providedIn:'root'
})

export class PersonnelService{
   
  constructor(private http:HttpClient){}


    liste_personnel:personnel[] =[{Matricule:'00001',Nom:'Kortass',Prenom:'Mouad',un1:30,un2:44,un3:88,profil:'M',img:'',cin:'BH454545',MNG:1,date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'},
    {Matricule:'00002',Nom:'satrokk',Prenom:'test',un1:10,un2:2,un3:2,profil:'C',img:'',cin:'BH454545',MNG:3,date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'},
    {Matricule:'00003',Nom:'echaki',Prenom:'ayoun',un1:10,un2:44,un3:88,profil:'C',img:'',cin:'BH454545',MNG:2,date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'},
    {Matricule:'00004',Nom:'el quomari',Prenom:'wahiba',un1:20,un2:1,un3:88,profil:'M',img:'',cin:'BH454545',date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'},
    {Matricule:'00005',Nom:'belbal',Prenom:'zineb',un1:10,un2:2,un3:88,profil:'M',img:'',cin:'BH454545',date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'},
    {Matricule:'00006',Nom:'abouno',Prenom:'omar',un1:30,un2:2,un3:88,profil:'M',img:'',cin:'BH454545',date_embauche:'01-01-2022',Email:'m.kortass@gmail.com'}


    
    
]

GetAllPersonnel() :  personnel[]{

    return this.liste_personnel;
}

getPersonneById(id: String): personnel {
    const personne = this.liste_personnel.find(personnel => personnel.Matricule === id);  /// find objet where objet.id=faceSnapId
    if (!personne) {
        throw new Error('FaceSnap not found!');
    } else {
        return personne;
       
    }
  }

  GetFirstPersonne():personnel{
    return  this.liste_personnel[0];
  }

  GetPersonneByMotCle(MotCle:string){

    return this.liste_personnel.filter(p=>p.Nom.toLocaleLowerCase().match(MotCle.toLocaleLowerCase()) || p.Prenom.toLocaleLowerCase().match(MotCle.toLocaleLowerCase()) || p.Matricule.toLocaleLowerCase().match(MotCle.toLocaleLowerCase()));

  }

  DeletePersonne(id:string){ 
    const index = this.liste_personnel.findIndex(p=>p.Matricule===id)

 this.liste_personnel.splice(index,index)
   
  }

  UpdatePersonne(p:personnel){
    const index = this.liste_personnel.findIndex(per=>per.Matricule===p.Matricule)
    this.liste_personnel[index].Nom=p.Nom;
    this.liste_personnel[index].Prenom=p.Prenom;

  }

  AddPersonne(p:personnel){
   
    this.liste_personnel.push(p);
  }

GetAllManagers(){
 return this.http.get('http://localhost:8080/manangers')
}

}