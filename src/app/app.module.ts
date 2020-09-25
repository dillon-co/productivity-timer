import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { CustomTimesComponent } from './custom-times/custom-times.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
