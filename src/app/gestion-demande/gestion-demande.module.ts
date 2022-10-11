import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ListeDemandeComponent } from './components/liste-demande/liste-demande.component';





@NgModule({
  declarations: [
  
    ListeDemandeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class GestionDemandeModule { }
