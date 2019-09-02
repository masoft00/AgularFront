import { Component, OnInit } from '@angular/core'; 
import { ListerPartenaireService } from '../lister-partenaire.service';



@Component({
  selector: 'app-lister-partenaire',
  templateUrl: './lister-partenaire.component.html',
  styleUrls: ['./lister-partenaire.component.css']
})
export class ListerPartenaireComponent implements OnInit {

  dtoptions: DataTables.Settings={};
  constructor(private Listepartenaire:ListerPartenaireService) { }
  partenaires;
  ngOnInit() :void{
      this.Listepartenaire.getlistepartenaires().subscribe(data=>{
      this.partenaires=data;

     },err=>{
      console.log(err);
     })
    // this.dtoptions={
    //   pagingType: 'full_numbers'
    // }
  }
}
