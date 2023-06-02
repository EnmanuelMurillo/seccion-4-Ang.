import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../counter/counter.component.html',
})
export class CounterComponent {

  public title: string = 'Mi primera app de Angular';
  public counter:number = 10;

  incrementar( value:number ):void{
    this.counter += value;
  }

  disminuir( value:number ):void{
    this.counter -= value;
  }

  reset(  ):void{
    this.counter = 10;
  }

}
