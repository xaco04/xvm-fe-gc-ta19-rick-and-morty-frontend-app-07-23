import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListapersComponent } from './components/home/listapers/listapers.component';
import { PersComponent } from './components/home/listapers/pers/pers.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { AboutComponent } from './components/home/about/about.component';
import { OriginPipe } from './pipes/origin.pipe';
import { CharacterService } from './services/character.service';
import { AddComponent } from './components/home/add/add.component';
import { ListComponent } from './components/home/list/list.component';
import { EditComponent } from './components/home/edit/edit.component';
import { CharactersService } from './services/crudcharacter.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

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
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [CharacterService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }