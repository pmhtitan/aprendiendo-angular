import { Component, OnInit} from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public usuario_id: number;
  public userObj: any;

  constructor(private peticiones: PeticionesService) {
    this.usuario_id = 2;
   }

  ngOnInit() {
    

    // forma Angular 11 [positronx.io]
    this.peticiones.getUser(this.usuario_id).subscribe((res: {}) => {
      this.userObj = res;
      console.log(this.userObj);
    })

    this.cargaUsuario();
  }

  cargaUsuario(){
    // forma profesor
    this.userObj = false;

    setTimeout(() => {
      //your code to be executed after 1 second
    
      this.peticiones.getUser(this.usuario_id).subscribe(
        result => {
          console.log(result);
          this.userObj = result;
        }, 
        error => {
          console.log(<any>error);
        }
      );

    }, 700);   // para que se vea la animación de espera le pongo un timeout de 1 segundo
  }

}
