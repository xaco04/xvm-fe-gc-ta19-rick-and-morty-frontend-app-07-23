import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent } from './components/home/home.component' 
import { RegisterComponent } from './components/register/register.component'; 
import { LoginComponent } from './components/login/login.component';
import { ListapersComponent } from './components/listapers/listapers.component';
import { AboutComponent } from './components/about/about.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la ruta raíz a '/home' 
  { 
    path:'home', 
    component: HomeComponent 
  }, 
  { 
    path:'register', 
    component: RegisterComponent 
  }, 
  { 
    path:'login', 
    component: LoginComponent 
  },
  {
    path:'listapers',
    component: ListapersComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  }

]; 
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 

export class AppRoutingModule { } 