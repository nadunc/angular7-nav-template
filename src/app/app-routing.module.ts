import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { GeneralComponent } from './settings/general/general.component';
import { SecurityComponent } from './settings/security/security.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'friends', component:FriendsComponent},
  {
    path : 'settings', 
    component : SettingsComponent,
    children : [
      {path: 'profile', component:ProfileComponent},
      {path: 'general', component:GeneralComponent},
      {path: 'security', component:SecurityComponent},
      {path: '**', redirectTo:'profile'}
    ]
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
