import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionPersonnelModule } from './gestion-personnel/gestion-personnel.module';
import { MenuComponent } from './menu/menu.component';
import { NouvelleDemandeComponent } from './gestion-demande/components/nouvelle-demande/nouvelle-demande.component';
import { GestionDemandeModule } from './gestion-demande/gestion-demande.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { GestionUnitesModule } from './gestion-unites/gestion-unites.module';
import { AccueilModule } from './accueil/accueil.module';
import { TDBComponent } from './accueil/components/tdb/tdb.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NouvelleDemandeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionPersonnelModule,
    GestionDemandeModule,
    GestionUnitesModule,
    AuthentificationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
