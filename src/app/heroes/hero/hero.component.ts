import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
[x: string]: any;

  public name:string = 'iroman';
  public age: number = 45;


  get capitalizedName(): string {

    return this.name.toUpperCase();

  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  // changeHero( value:string = 'Spiderman' ):void {

  //   this.name = value

  // }

  // changeAge( value:number = 25 ) {

  //   this.age = value

  // }
  changeHero():void {

    this.name = 'Spiderman'

  }

  changeAge():void {

    this.age  = 25

  }

  resetForm():void {

    this.name = 'ironman';
    this.age = 45;

  }

}
