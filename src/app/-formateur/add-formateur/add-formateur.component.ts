import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formateur } from 'app/model/formateur';
import { FormateurService } from 'app/services/formateur/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
    showPassword: boolean = false;
    public addformateur: formateur;
constructor(private sercice_forma:FormateurService , private routerlink: Router){

}
    ngOnInit() {
        this.addformateur = {
            nom: '',
            prenom : '' ,
            password:'',
        }
      
    }

    save(model: formateur, isValid: boolean) {
    // call API to save customer
        if(isValid){
            this.sercice_forma.add_formateur(model)
            .subscribe((result)=> {
              console.log(result)
            if(result=='no')  
            {
                Swal.fire({
                title: "ce email existe déja",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            })
             }
             else{
                Swal.fire({
                    title: "success d'ajout!",
                    text: "formateur added!",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    type: "success"
                })
                this.routerlink.navigate(['/formateur/list']);

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