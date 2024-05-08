import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMedecinRoutingModule } from './dashboard-medecin-routing.module';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { ListRDVComponent } from './list-rdv/list-rdv.component';
import { RDVComponent } from './rdv/rdv.component';


@NgModule({
  declarations: [
    AddRDVComponent,
    ListRDVComponent,
    RDVComponent
  ],
  imports: [
    CommonModule,
    DashboardMedecinRoutingModule
  ]
})
export class DashboardMedecinModule { }
