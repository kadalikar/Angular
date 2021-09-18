import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstprojectComponent } from './firstproject/firstproject.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'employeedata',component:FirstprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
