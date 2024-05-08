import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProvidersComponent } from './liste-providers/liste-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListePostComponent } from './liste-post/liste-post.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AutGaurdService } from './service/aut-gaurd.service';
import { RegiterFormComponent } from './registerform/registerform.component';



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: 'listeProviders', component: ListeProvidersComponent,canActivate: [AutGaurdService] },
  { path: 'addProvider', component: AddProviderComponent,canActivate: [AutGaurdService] },
  { path: 'listeUsers', component: ListeUsersComponent ,canActivate: [AutGaurdService]},
  { path: 'listeArticles', component: ListeArticlesComponent ,canActivate: [AutGaurdService]},
  {path:'addArticle',component:AddArticleComponent,canActivate: [AutGaurdService]},
  { path: 'listePosts', component: ListePostComponent ,canActivate: [AutGaurdService]},
  { path: 'updateProvider/:id', component: UpdateProviderComponent ,canActivate: [AutGaurdService]},
  { path: 'contact', component: ContactComponent }, 
  { path: 'register', component: RegiterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent ,canActivate: [AutGaurdService]},
  {
    path: 'dashbaordAdmin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule)
  },
  {
    path: 'dashbaordMedecin',
    loadChildren: () => import('./dashboard-medecin/dashboard-medecin.module').then(m => m.DashboardMedecinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
