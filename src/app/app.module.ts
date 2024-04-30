import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListeUsersComponent } from './liste-users/liste-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DrpipePipe,
    MedecinComponent,

    ListeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
