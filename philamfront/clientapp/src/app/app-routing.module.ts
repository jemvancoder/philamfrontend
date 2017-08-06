import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent } from './about/about.component'
import {OrganizationComponent } from './organization/organization.component'
import {GalleryComponent } from './gallery/gallery.component'
import {RegisterComponent } from './register/register.component'
import {ForumComponent } from './forum/forum.component'
import {ActivitiesComponent } from './activities/activities.component'
import {ConstitutionComponent } from './constitution/constitution.component'
import {ContactComponent } from './contact/contact.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    //children: []
  },

    {
    path: 'about',
    component: AboutComponent
    //children: []
  },
  
     {
    path: 'org',
    component: OrganizationComponent
    //children: []
  },

     {
    path: 'gallery',
    component: GalleryComponent
    //children: []
  },

     {
    path: 'register',
    component: RegisterComponent
    //children: []
  },

     {
    path: 'forum',
    component: ForumComponent
    //children: []
  },

     {
    path: 'activities',
    component: ActivitiesComponent
    //children: []
  },
    {
    path: 'constitution',
    component: ConstitutionComponent
    //children: []
  },
      {
    path: 'contact',
    component: ContactComponent
    //children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
