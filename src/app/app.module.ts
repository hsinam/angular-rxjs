import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic0Component } from './topic0/topic0.component';
import { Topic0aComponent } from './topic0a/topic0a.component';

@NgModule({
  declarations: [
    AppComponent,
    Topic1Component,
    Topic2Component,
    Topic0Component,
    Topic0aComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
