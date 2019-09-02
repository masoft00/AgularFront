import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AjouterPartenaireComponent } from './ajouter-partenaire/ajouter-partenaire.component';
import { ListerPartenaireComponent } from './lister-partenaire/lister-partenaire.component';
import { AjouterCaissierComponent } from './ajouter-caissier/ajouter-caissier.component';
import { ListerUtilisateurComponent } from './lister-utilisateur/lister-utilisateur.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"ajouterPartenaire", component: AjouterPartenaireComponent},
  {path:"listepartenaire", component: ListerPartenaireComponent},
  {path:"ajouterCaissier", component: AjouterCaissierComponent},
  {path:"listeUtilisateurs", component: ListerUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
