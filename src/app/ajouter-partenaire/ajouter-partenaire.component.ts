import { Component, OnInit } from '@angular/core';
import { AjouterpartenaireService } from '../ajouterpartenaire.service';

@Component({
  selector: 'app-ajouter-partenaire',
  templateUrl: './ajouter-partenaire.component.html',
  styleUrls: ['./ajouter-partenaire.component.css'],
  providers:[AjouterpartenaireService],
})
export class AjouterPartenaireComponent implements OnInit {
  imageUrl: string = "/assets/Images/symfony-4.png";
  fileToUpload: File = null;
  constructor(private ajoutpartService : AjouterpartenaireService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader=new FileReader();
    
    reader.onload=(event:any)=> {
      this.imageUrl=event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  }

    OnSubmit(username,prenom,nom,image,adresse,email,telephone,raisonSociale,ninea,password){
   this.ajoutpartService.postFile(
     username.value,
     prenom.value,
     nom.value,
     adresse.value,
     email.value,
     telephone.value,
     raisonSociale.value,
     ninea.value,
     password.value,
     this.fileToUpload).subscribe(
     data =>{
    prenom        = null; 
    nom           = null;
    adresse       = null;
    username      = null;
    password      = null;
    email         = null;
    raisonSociale = null;
    ninea         = null;
    telephone     = null;
    image.value   = null;
    this.imageUrl = "/assets/Images/symfony-4.png";
     }
   );
  
  }

 

  
// fileData: File = null;
// constructor(private http: HttpClient) { }
 
// fileProgress(fileInput: any) {
//     this.fileData = <File>fileInput.target.files[0];
// }


 
// onSubmit() {
//     const formData = new FormData();
   
//     formData.append('file', this.fileData);
//     this.http.post('http://localhost:8000/api/register', formData,{
//       reportProgress: true,
//     observe: 'events'   
//     })
//     .subscribe(events => {
//       if(events.type == HttpEventType.UploadProgress) {
//           //console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
//       } else if(events.type === HttpEventType.Response) {
//           console.log(events);
//       }
//   })
// }


// onAddPartenaire(data) {
//   let url=this.Ajtpart.host3;
//   this.Ajtpart.postRessource(url,data)
//   .subscribe(data=>{
//      console.log(data);
//   },err=>{
//     console.log(err);
//   })
//   }

   
}
