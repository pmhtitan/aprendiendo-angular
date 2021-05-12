import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public formulario;

  public usuario: ContactoUsuario;
  public show_data;

  constructor(private _formBuilder : FormBuilder) {
    // forma de Profesor  
    this.usuario = new ContactoUsuario('','','','');

    // forma de StackBliz
    this.formulario = this._formBuilder.group({
      nombre: "",
      apellidos: "",
      email: "",
      mensaje: ""
    });
   }

  ngOnInit(): void {
  }

  submitted(value){
    console.log(value);
    this.formulario.reset();
  }

  submitted2(form){
		this.show_data = this.usuario;
		console.log(this.show_data);
		//form.reset();
	}

}
