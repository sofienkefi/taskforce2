import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListePostComponent } from './liste-post/liste-post.component';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeProvidersComponent } from './liste-providers/liste-providers.component';

@NgModule({
  declarations: [
      AppComponent,
      DrpipePipe,
      ListeUsersComponent,
      ListePostComponent,
      AddProviderComponent,
      UpdateProviderComponent,
      NavbarComponent,
      ListeProvidersComponent
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
