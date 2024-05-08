import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RDVComponent } from './rdv/rdv.component';
import { ListRDVComponent } from './list-rdv/list-rdv.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';

const routes: Routes = [
  {
    path: '',
    component: RDVComponent,
    children:[
      {
        path: 'list',
       component: ListRDVComponent,
      },
      {
        path: 'add',
       component: AddRDVComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardMedecinRoutingModule { }
