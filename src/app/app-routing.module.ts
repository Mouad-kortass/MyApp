import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDBComponent } from './accueil/components/tdb/tdb.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ListeDemandeComponent } from './gestion-demande/components/liste-demande/liste-demande.component';
import { NouvelleDemandeComponent } from './gestion-demande/components/nouvelle-demande/nouvelle-demande.component';
import { AjouterSectionComponent } from './gestion-personnel/components/ajouter-section/ajouter-section.component';
import { ListePersonnelComponent } from './gestion-personnel/components/liste-personnel/liste-personnel.component';
import { SectionComponent } from './gestion-personnel/components/section/section.component';
import { EditSectionComponent } from './gestion-unites/components/edit-section/edit-section.component';
import { GestionUnitesComponent } from './gestion-unites/components/gestion-unites/gestion-unites.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path:'Accueil',component:TDBComponent},
  {path:'collaborateur',component:MenuComponent,children:[
   // {path:"section",component:SectionComponent},
    {path:'demande',component:NouvelleDemandeComponent},
    
    {path:'liste_demande',component:ListeDemandeComponent},
    {path:'personnel',component:ListePersonnelComponent},
    {path:'UNAF_E/:nom',component:EditSectionComponent},
    {path:'UNAF_1/:code',component:SectionComponent},
    {path:'UNAF_2/:code',component:SectionComponent},
    {path:'UNAF_3/:code',component:SectionComponent},
    {path:'gestion_unites',component:GestionUnitesComponent},
    {path:'UNAF_A/:code',component:AjouterSectionComponent}],
   //canActivate:[AuthentificationGuard]
  },
  {path:'login',component:LoginComponent},
  {path:"section",component:SectionComponent},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
