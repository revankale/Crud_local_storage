import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "employee",
        component: EmployeeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
