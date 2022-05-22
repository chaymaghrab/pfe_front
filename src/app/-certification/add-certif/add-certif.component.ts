import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'app/services/certification/certification.service';
import {certification} from 'app/model/certification';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-certif',
  templateUrl: './add-certif.component.html',
  styleUrls: ['./add-certif.component.css']
})

/*     amiens@neoresid.com
        attestation de recommendation debergement pour entamer les demarches du visa */


export class AddCertifComponent implements OnInit {
    public addcertif: certification;
constructor(private sercice_certif:CertificationService,
    private routerlink: Router){

}
    ngOnInit() {
        this.addcertif = {
            nom_formation: '',
            type_examan : '' ,
        }
      
    }

    save(model: certification, isValid: boolean) {
    // call API to save customer
        if(isValid){
            this.sercice_certif.add_certif(model)
            .subscribe((result)=> {
              console.log(result)
            if(result=='no')  
            {
                Swal.fire({
                title: "cette formation existe déja",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            })
             }
             else{
                Swal.fire({
                    title: "success d'ajout!",
                    text: "formation added!",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    type: "success"
                })
                this.routerlink.navigate(['/certif/list']);
             }
            
            });
        }
    }
   
    onSubmit(value: any):void{
        console.log(value);
    }
}