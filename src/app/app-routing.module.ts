import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent } from './components/home/home.component' 
import { RegisterComponent } from './components/register/register.component'; 
import { LoginComponent } from './components/login/login.component';
import { ListapersComponent } from './components/home/listapers/listapers.component';
import { AboutComponent } from './components/home/about/about.component';
import { AddComponent } from './components/home/add/add.component';
import { ListComponent } from './components/home/list/list.component';
import { EditComponent } from './components/home/edit/edit.component';


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