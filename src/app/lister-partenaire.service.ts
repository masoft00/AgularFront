import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ListerPartenaireService {
  Headers = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage)}
  public host2:string='http://localhost:8000/lister'
  constructor(private http:HttpClient) { }
  //methode qui me permet de lister les partenaires
  getlistepartenaires(){
     return this.http.get(this.host2,this.Headers);
  }
}
