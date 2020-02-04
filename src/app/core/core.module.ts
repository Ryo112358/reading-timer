import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("Import core module ONLY in the root module!")
    }
  }
}