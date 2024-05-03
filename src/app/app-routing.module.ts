import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProvidersComponent } from './liste-providers/liste-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListePostComponent } from './liste-post/liste-post.component';

const routes: Routes = [
  {path:"listeProviders",component:ListeProvidersComponent},
  {path:"addProvider",component:AddProviderComponent},
  {path:"listeUsers",component:ListeUsersComponent},
  {path:"listePosts",component:ListePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
