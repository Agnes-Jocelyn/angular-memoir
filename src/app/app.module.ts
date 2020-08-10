import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShowDialogComponent } from './home-page/show-dialog/show-dialog.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProfilePageComponent,
    ShowDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
