import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { ConstitutionComponent } from './constitution/constitution.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ForumComponent } from './forum/forum.component';
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OrganizationComponent,
    ConstitutionComponent,
    RegisterComponent,
    ContactComponent,
    GalleryComponent,
    ActivitiesComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'clientapp-pre'}),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
