import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListePostComponent } from './liste-post/liste-post.component';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeProvidersComponent } from './liste-providers/liste-providers.component';
import { ContactComponent } from './contact/contact.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';

import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AproposComponent } from './apropos/apropos.component';
import { MessageContactComponent } from './message-contact/message-contact.component';
import { RegiterFormComponent } from './registerform/registerform.component';

@NgModule({
  declarations: [
      AppComponent,
      DrpipePipe,
      ListeUsersComponent,
      ListePostComponent,
      AddProviderComponent,
      UpdateProviderComponent,
      NavbarComponent,
      ListeProvidersComponent,
      ContactComponent,
      ListeArticlesComponent,

      AddArticleComponent,
        LoginComponent,
        LogoutComponent,
        AproposComponent,
        MessageContactComponent,
        RegiterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
