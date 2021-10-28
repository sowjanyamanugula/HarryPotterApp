import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HarryPotterListComponent } from './harry-potter-list/harry-potter-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HarryPotterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
