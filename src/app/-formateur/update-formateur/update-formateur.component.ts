import { Component, ContentChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { formateur } from 'app/model/formateur';
import { FormateurService } from 'app/services/formateur/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {
  showPassword: boolean = false;
 
  public addformateur: formateur;
  constructor(private sercice_forma:FormateurService , private router:ActivatedRoute ,private routerlink: Router){
  
  }
      ngOnInit() {
        this.sercice_forma.get_formateurById(this.router.snapshot.params.id)
        .subscribe((result : any)=>{
        
          this.addformateur = {
            nom : result['user'][0].nom,
            prenom : result['user'][0].prenom,
            email : result['user'][0].email,
            password : result['user'][0].password,
            statut : (result['statut']),
            telephone  :  (result['telephone']),
        }
        });

        
      }
  
      save(model: formateur, isValid: boolean) {
      // call API to save customer
     
          if(isValid){
              this.sercice_forma.update_formateur(this.router.snapshot.params.id,model)
              .subscribe((result)=> {
                console.log(result);
                if(result=='no')  
            {
                Swal.fire({
                title: "cette email existe déja",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
                });
                
             }
             else{
                Swal.fire({
                    title: "updated successfuly !",
                    text: " success!",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    type: "success"
                })
                this.routerlink.navigate(['/formateur/list'])
             }
              });
          }
      }
     
      onSubmit(value: any):void{
          console.log(value);
      }
      showHidePassword() {
        this.showPassword = !this.showPassword;
      }
  }