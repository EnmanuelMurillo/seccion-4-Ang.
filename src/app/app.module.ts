import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';


import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/list.component';
import { Prueba02Component } from './prueba02/prueba02.component';
import { ListasModule } from './heroes/listas.module';
// import { List2Component } from './heroes/list2/list2.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    Prueba02Component,
    // HeroComponent,
    // List2Component
  ],
  exports: [],
  imports: [
    BrowserModule,
    CounterModule,
    ListasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
