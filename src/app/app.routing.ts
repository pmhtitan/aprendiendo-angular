// Importar módulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';

// Crear un array de configuración de las rutas
const appRoutes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'zapatillas',
        component: ZapatillasComponent
    },
    {
        path: 'videojuegos',
        component: VideojuegoComponent
    },
    {
        path: 'prueba',
        component: PruebaComponenteComponent
    },
    {
        path: 'prueba/:nombre',
        component: PruebaComponenteComponent
    },
    {
        path: 'prueba/:nombre/:edad', // de esta manera el parámetro apellidos es 'opcional', y el nombre obligatorio.
        component: PruebaComponenteComponent
    },
    {
        path: '**', // wild card, si salta 404 nos redirige a la base ('/');
        component: HomeComponent
    }
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);






