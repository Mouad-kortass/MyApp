import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { GestionUnites } from "src/app/gestion-unites/models/gestion_unites.model";
import { unite } from "src/app/gestion-unites/models/unite.model";
import { Section } from "../models/Section.model";



@Injectable({
    providedIn: 'root'
})

export class SectionService{
    constructor(private http:HttpClient){}


Sections : any
Section_list : Section[] = [
    
{code_u:1,designation_u:'Service Informatique'},
{code_u:2,designation_u:'Service Comptabilité'},

]


all():Observable<unite[]>{
 return this.http.get<unite[]>("http://localhost:8080/unite2s");

}
GetAllSection(){
    return this.Section_list
}
findUniteById(code:number){
    return this.http.get<unite>("http://localhost:8080/unite1s/"+code);
  }

delete(code:number,uf:string){
    
    return this.http.delete("http://localhost:8080/unite"+uf+"s/"+code);
   
   }



OnaddSection(s :unite,uf:string){
    return this.http.post("http://localhost:8080/"+uf+"s",s)
}

GetUniteById(id:string,uf:string):Observable<unite> {
    return this.http.get<unite>('http://localhost:8080/'+uf+'s/'+id)

}

FindSectionByMc(mc:string,c:string){
    return this.http.get('http://localhost:8080/unite'+c+'s/search/bydesignation/?mc='+mc)
}

Getunites(code:number) {
    return this.http.get<GestionUnites>('http://localhost:8080/gestion_unites/'+code)
}
onUpdate(unite:GestionUnites){
    return this.http.post("http://localhost:8080/gestion_unites",unite)
}

GetAllUnitesByCode(c:string){

  return this.http.get('http://localhost:8080/unite'+c+'s')
 
}

Menu(){
return this.http.get('http://localhost:8080/gestion_unites')
}

}