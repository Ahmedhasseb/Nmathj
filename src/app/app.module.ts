import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideComponent } from './modules/side/side.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './modules/Navbar/sidebar/side-bar/side-bar.component';
import { MainComponent } from './modules/Main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
   SideComponent,
   MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
