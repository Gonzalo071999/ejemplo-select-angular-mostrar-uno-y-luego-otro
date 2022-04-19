import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos;
  plazasAfilziaciones;

  opcionSeleccionado: string = '0'; // Iniciamos
  opcionSeleccionadoPlaza: string = '0';
  verSeleccion: string = '';

  constructor() {
    //this.datos = ['plaza', 'afilizaciones'];
    this.datos = [
      { id: 1, name: 'Plazas' },
      { id: 2, name: 'Afilizaciones' },
    ];
  }

  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
    if (this.verSeleccion == '1') {
      this.plazasAfilziaciones = [
        { id: 1, name: 'Patio Urbano' },
      ];
    }
   if(this.verSeleccion == '2'){
    this.plazasAfilziaciones = [
      { id: 1, name: 'Coparmaex' },
    ];
   } 
  }
  PlazsAfllizaciones() {
    this.verSeleccion = this.opcionSeleccionadoPlaza;
  }
}
