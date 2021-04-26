import { Component, OnInit } from '@angular/core';
import { products } from '../models/producto';
import { Zapatilla } from '../models/zapatilla';


@Component({ 
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',    
})
export class ZapatillasComponent implements OnInit{   
    public titulo: string = "Componente de zapatillas"; 
    public products = products;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.marcas = new Array();
        this.color = "yellow";
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'white', 34, true),
            new Zapatilla('Adiddas', 'Adiddas', 'black', 22, true),
            new Zapatilla('Adiddas Collection 2021', 'Adiddas', 'yellow', 45, true),
            new Zapatilla('Jaiber Arizona', 'Jaiber', 'red', 40, false)
        ];
    }
    ngOnInit(){
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

}