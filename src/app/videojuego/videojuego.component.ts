import { Component } from '@angular/core';

@Component({ // NO cerrar con ; Es un decorador
    selector: 'videojuego',
    template: `
    <h2>Componente de videojuegos</h2>
    <ul>
        <li>GTA</li>
        <li>Call of Duty</li>
        <li>Tekken</li>
        <li>Battlefield</li>
        <li>Dreadnought</li>
    </ul>
    `
})
export class VideojuegoComponent{

    constructor(){
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }

}