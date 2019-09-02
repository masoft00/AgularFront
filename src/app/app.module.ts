import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListerPartenaireComponent } from './lister-partenaire/lister-partenaire.component';
import { AjouterPartenaireComponent } from './ajouter-partenaire/ajouter-partenaire.component';
import { LoginComponent } from './login/login.component';
import { DataTablesModule } from 'angular-datatables';
import { ListerUtilisateurComponent } from './lister-utilisateur/lister-utilisateur.component';
import { AjouterCaissierComponent } from './ajouter-caissier/ajouter-caissier.component';
// import { AjouterCaissierComponent } from './ajouter-caissier/ajouter-caissier.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjouterPartenaireComponent,
    ListerPartenaireComponent,
    AjouterPartenaireComponent,
    ListerUtilisateurComponent,
    AjouterCaissierComponent,
    // AjouterCaissierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }