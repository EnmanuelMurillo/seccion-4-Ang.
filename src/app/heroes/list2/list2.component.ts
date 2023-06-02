import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component {

  public heroNames: string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor'];
  public deletedHero?:string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
    // console.log( this.removeLastHero)
  }

}
