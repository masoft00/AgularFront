import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListerUtilisateurService {

  Headers = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage)}
  public host3:string='http://localhost:8000/lister/utilisateur'
  constructor(private http:HttpClient) { }
  //methode qui me permet de lister les utilisateurs
  getlisteUtilisateur(){
     return this.http.get(this.host3,this.Headers);
  }
}
