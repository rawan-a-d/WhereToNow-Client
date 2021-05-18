import { GuardianPageComponent } from './guardian-page/guardian-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { 
    path: 'wheretonow/profile',
    component: ProfilePageComponent,
  },
  { 
    path: 'wheretonow/guardians',
    component: GuardianPageComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
