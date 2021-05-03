import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean;
  public resultado: boolean;

  constructor() {
    this.identificado = false;
    this.resultado = false;
   }

  ngOnInit() {
  }

  setIdentificado(){
    this.identificado = !this.identificado;
  }
  
  si(){
    this.resultado = false;
  }
  no(){
    this.resultado = true;
  }
}
