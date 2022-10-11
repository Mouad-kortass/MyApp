import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Section } from 'src/app/gestion-personnel/models/Section.model';
import { SectionService } from 'src/app/gestion-personnel/Services/Section.service';
import { unite } from '../../models/unite.model';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {

  formSection!:FormGroup
  id!:string
  uf!:string
  unite! : unite
  code!:string
  constructor(private route:ActivatedRoute,private service:SectionService,public R:Router) { 
    this.id = this.route.snapshot.params['code']
    this.uf=this.route.snapshot.params['des']
  }
  
  ngOnInit(): void {

   this.service.GetUniteById(this.id,this.uf).subscribe( data=>this.unite=data)
  
  // this.list={code_u:10,designation_u:'llll'}
  }
  EditUnite(u:any){
   /// this.unite.code_u=u.code_u;
    this.unite.designation=u.designation;
    this.service.OnaddSection(<unite>this.unite,this.uf).subscribe(
      data=>this.R.navigateByUrl('/collaborateur/UNAF/'+this.uf.slice(-1))
      
    )
  }
  Annuler(){
    this.R.navigateByUrl('/collaborateur/UNAF/'+this.uf.slice(-1))
  }


}
