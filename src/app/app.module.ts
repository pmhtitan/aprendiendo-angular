import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
// rutas
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    PruebaComponenteComponent,
    ZapatillasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing // esto
  ],
  providers: [
    appRoutingProviders //  y esto para rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
