import { Component, OnInit } from '@angular/core';
import { products } from '../models/producto';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatillas.service';


@Component({ 
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [ ZapatillaService ]    
})
export class ZapatillasComponent implements OnInit{   
    public titulo: string = "Componente de zapatillas"; 
    public products = products;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(private _zapatillaService: ZapatillaService)
    {
        this.marcas = new Array();
        this.color = "yellow";
        this.mi_marca = "Jumper";   
    }
    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas(); // y asi utilizamos el service 
        console.log(this.zapatillas);
        this.rellenarMarcas();
          
    }

    rellenarMarcas(){
        this.zapatillas.forEach((element,index) => {            
            // eliminar duplicados
            if(this.marcas.indexOf(element.marca) == -1){ // que busque en el array de marcas, y si el que quiere meter ya está, que no lo meta.
                this.marcas.push(element.marca);
            }
        });
        console.log(this.marcas);
    }
    mostrarMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        if(this.marcas.indexOf(this.mi_marca) == -1){
        this.marcas.push(this.mi_marca);
        }
    }
    borrarMarca(index){
        this.marcas.splice(index, 1);
    }
    onBlur(){
        console.log("Evento onBlur activado, has salido del foco")
    }
    onKeyEnter(){
       alert(this.mi_marca + " Activado por Key Enter");
    }

}