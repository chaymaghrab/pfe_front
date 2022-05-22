import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { certification } from 'app/model/certification';
import { CertificationService } from 'app/services/certification/certification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-certif',
  templateUrl: './update-certif.component.html',
  styleUrls: ['./update-certif.component.css']
})
export class UpdateCertifComponent implements OnInit {

  public addcertif: certification;
  constructor(private sercice_certif:CertificationService , private router:ActivatedRoute,
    private routerlink: Router){
  
  }
      ngOnInit() {
        this.sercice_certif.get_certifById(this.router.snapshot.params.id)
        .subscribe((result : any)=>{
        
          this.addcertif = {
            nom_formation : result['nom_formation'],
            nbheure : (result['nbheure']),
            score_de_passage : (result['score_de_passage']),
            nbquestion : (result['nbquestion']),
            type_examan : (result['type_examan']),
            duree  :  (result['duree']),
        }
        });

        
      }
  
      save(model: certification, isValid: boolean) {
      // call API to save customer
     
          if(isValid){
              this.sercice_certif.update_certif(this.router.snapshot.params.id,model)
              .subscribe((result)=> {
                console.log(result);
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