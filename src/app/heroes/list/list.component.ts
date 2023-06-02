import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title = 'Prueba sin Internet';
  fondoAmarillo = false;
  letraGrande = false;

  chechkFondo(){
    this.fondoAmarillo=!this.fondoAmarillo;
  }

  checkLetra(){
    this.letraGrande=!this.letraGrande;
  }

  asignaClases(){
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };

    return classes;

  }


}
