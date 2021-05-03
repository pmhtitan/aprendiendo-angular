import { Injectable } from '@angular/core'; // tenemos que decorar la clase ocn esto para poder inyectar, y no tener que invocar el objeto siempre.
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{

    public zapatillas: Array<Zapatilla>; 

     constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'white', 34, true),
            new Zapatilla('Adiddas', 'Adiddas', 'black', 22, true),
            new Zapatilla('Adiddas Collection 2021', 'Adiddas', 'yellow', 45, true),
            new Zapatilla('Jaiber Arizona', 'Jaiber', 'red', 40, false)
        ];
     }

     getTexto(){
         return "Hola mundo desde un servicio";
     }

     getZapatillas(): Array<Zapatilla>{ // devolver un array de tipo zapatillas
        return this.zapatillas;
     }

}