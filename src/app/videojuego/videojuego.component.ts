import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({ // NO cerrar con ; Es un decorador
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',    
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string[];

    constructor(){
        this.titulo = "Componente de videojuegos";  
        this.listado = ['GTA','Call of Duty', 'Tekken', 'Battlefield', 'Dreadnought'];     
    }

    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    triggerDoCheck(){
        this.titulo = "Nuevo titulo del componente";
    }

    triggerOnDestroy(){
        
    }

    

}