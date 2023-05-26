import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './mycomp/login/login.component';
import { HomeComponent } from './mycomp/home/home.component';
import { ListResultComponent } from './mycomp/list-result/list-result.component';
import { StudentFormComponent } from './mycomp/student-form/student-form.component';
import { CheckAuthComponent } from './mycomp/check-auth/check-auth.component';
import { SearchResultComponent } from './mycomp/search-result/search-result.component';
import { EditformComponent } from './mycomp/editform/editform.component';


const routes: Routes = [
  {
  path:'login',
  component:LoginComponent  
  },
  {
    path:'home',
    component:HomeComponent  
  },{
    path:'search',
    component:SearchResultComponent  
  },
  {
    path:'list',
    component:ListResultComponent  
  },
  {
    path:'add',
    component:StudentFormComponent  
  },
  {
    path:'auth',
    component:CheckAuthComponent  
  },
  {
    path:'edit/:rollno',
    component:EditformComponent  
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
