import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';

const routes: Routes = [  {
  path: '',
  component: DeptComponent,
  children:[
    {
      path: 'list',
     component: ListDeptComponent,
    },
    {
      path: 'add',
     component: AddDeptComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
