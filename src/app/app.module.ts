import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  declarations: [Material2AppAppComponent, DialogContent],
  entryComponents: [DialogContent],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
