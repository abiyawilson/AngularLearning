import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SucessComponent } from './sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
