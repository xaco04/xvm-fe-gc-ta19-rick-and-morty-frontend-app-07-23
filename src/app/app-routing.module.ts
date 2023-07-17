import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent } from './home/home.component' 
import { RegisterComponent } from './components/register/register.component'; 
import { LoginComponent } from './components/login/login.component';
import { ListapersComponent } from './home/listapers/listapers.component';
import { AboutComponent } from './home/about/about.component';
import { AddComponent } from './home/add/add.component';
import { ListComponent } from './home/list/list.component';
import { EditComponent } from './home/edit/edit.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home' 
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