import { NgModule } from '@angular/core';
import { List2Component } from './list2/list2.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    List2Component,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    List2Component,
    HeroComponent
  ]
})
export class ListasModule { }
