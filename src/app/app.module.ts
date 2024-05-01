import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListePostComponent } from './liste-post/liste-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DrpipePipe,
    MedecinComponent,

    ListeUsersComponent,
      ListePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
