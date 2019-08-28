import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private LogService:  LoginService, private router:Router) { }

  ngOnInit() {
  }
   // tslint:disable-next-line: comment-format
  //Cette methode me permet de se connecter vers mon API
  onLogin(data) {
   this.LogService.login(data)
  .subscribe(resp => {
   // tslint:disable-next-line: typedef-whitespace
    const jwt = resp.body.token;
    this.LogService.saveJwtToken(jwt);
    //ce bout de code me permet de faire une redirection
    this.router.navigateByUrl('/ajouterPartenaire');
  }, err => {
  });
  }

  isAdmin(){
      return this.LogService.isAdmin();
    }

    isUser(){
      return this.LogService.isAdmin();
    }

}
