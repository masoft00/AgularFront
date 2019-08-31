import { Component, OnInit } from '@angular/core'; 
import { ListerPartenaireService } from '../lister-partenaire.service';



@Component({
  selector: 'app-lister-partenaire',
  templateUrl: './lister-partenaire.component.html',
  styleUrls: ['./lister-partenaire.component.css']
})
export class ListerPartenaireComponent implements OnInit {

  constructor(private Listepartenaire:ListerPartenaireService) { }
  partenaires;
  ngOnInit() {
    this.Listepartenaire.getlistepartenaires().subscribe(data=>{
      this.partenaires=data;
      // console.log(data);
      // console.log('okkk');
      //alert('ok');
    },err=>{
      console.log(err);
    })
  }
}
