import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDBComponent } from './components/tdb/tdb.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TDBComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    TDBComponent
  ]
})
export class AccueilModule { }
