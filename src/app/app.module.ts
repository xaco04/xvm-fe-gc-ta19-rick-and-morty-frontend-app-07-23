import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
import { DetailsComponent } from './home/details/details.component';
import { AddComponent } from './home/add/add.component';
import { ListComponent } from './home/list/list.component';

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
    OriginPipe,
    DetailsComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }