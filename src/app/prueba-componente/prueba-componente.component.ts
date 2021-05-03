import { Component, OnInit } from '@angular/core';
// para poder recoger parámetros
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-prueba-componente',
  templateUrl: './prueba-componente.component.html',
  styleUrls: ['./prueba-componente.component.css']
})
export class PruebaComponenteComponent implements OnInit {

  public nombre: string;
  public edad: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router 
    ) { }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      // aquí ya dentro tengo TODOS los parámetros que le estoy pasando por la URL
        this.nombre = params['nombre'];
        this.edad = +params.edad;
    });
  }

  redirigirZapatillas(){
    this._router.navigate(['/zapatillas']);
  }

}
