import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjouterpartenaireService {
   constructor(private http : HttpClient) { }

  postFile(
    prenom       : string, 
    nom          : string,
    adresse      : string,
    username     : string,
    password     : string,
    email        : string,
    raisonSociale: string,
    ninea        : string,
    telephone    : string,
    fileToUpload : File,
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/register';
    const formData : FormData= new FormData();
    formData.append('prenom',prenom);
    formData.append('nom', nom);
    formData.append('adresse', adresse);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('raisonSociale', raisonSociale);
    formData.append('ninea', ninea);
    formData.append('telephone', telephone);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData,Headers);
  }

    // host3="http://localhost:8000/api/register";
  // constructor(private http:HttpClient,private LogService:LoginService,) { }
  // postRessource(host3,data){
  //   let headers=new HttpHeaders({"authorization":"Bearer "+this.LogService.jwt});
  //   return this.http.post(host3,data,{headers:headers})
  // }

}
