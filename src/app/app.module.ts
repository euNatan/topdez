import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { reducer } from './../reducers/item.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    StoreModule.forRoot({
      item: reducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
