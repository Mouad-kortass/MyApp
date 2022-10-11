import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSectionComponent } from './components/edit-section/edit-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GestionUnitesComponent } from './components/gestion-unites/gestion-unites.component';



@NgModule({
  declarations: [
    EditSectionComponent,
    GestionUnitesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class GestionUnitesModule { }
