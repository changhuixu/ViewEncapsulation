import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NativeComponent } from './native/native.component';
import { NoneComponent } from './none/none.component';
import { GlobalComponent } from './global/global.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NativeComponent,
    NoneComponent,
    GlobalComponent,
    Parent1Component,
    Parent2Component,
    Parent3Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
