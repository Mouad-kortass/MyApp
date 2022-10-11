import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePersonnelComponent } from './components/liste-personnel/liste-personnel.component';
import { AjouterPersonnelComponent } from './components/ajouter-personnel/ajouter-personnel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './components/section/section.component';
import { AjouterSectionComponent } from './components/ajouter-section/ajouter-section.component';



@NgModule({
  declarations: [
    AjouterPersonnelComponent,
    ListePersonnelComponent,
    SectionComponent,
    AjouterSectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class GestionPersonnelModule { }
