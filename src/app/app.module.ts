import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListapersComponent } from './home/listapers/listapers.component';
import { PersComponent } from './home/listapers/pers/pers.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { OriginPipe } from './pipes/origin.pipe';
import { CharacterService } from './services/character.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ListapersComponent,
    PersComponent,
    NavbarComponent,
    AboutComponent,
    OriginPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }