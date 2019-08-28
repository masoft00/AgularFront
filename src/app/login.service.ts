import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host1 = 'http://127.0.0.1:8000';
  jwt: string;
  username: string;
  roles: Array <string>;

  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post<any>(this.host1+'/api/login_check',data,{observe:'response'});
  }

    saveJwtToken(jwt:string){
       localStorage.setItem('token', jwt);
       this.jwt = jwt;
       this.parsejwt(jwt);
    }
   
    
    parsejwt(token:any){
    const jwtHelper=new JwtHelperService();
    //const objJwt =jwtHelper.decodeToken(this.jwt);
    return jwtHelper.decodeToken(token);
    //this.roles=objJwt.roles;
    }


    
    isAdmin(){
      return this.roles.indexOf('ROLE_ADMIN_SUP')>=0;
    }

    isUser(){
      return this.roles.indexOf('USER')>=0;
    }

}
