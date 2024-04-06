import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideComponent } from './modules/side/side.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/NavBar/navbar/navbar.component';
import { MainComponent } from './modules/Main/main/main.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
   SideComponent,
   MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
