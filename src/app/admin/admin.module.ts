import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  
  { path : '', component: AdmindashboardComponent,children : [
      { path: 'blog', component: BlogComponent },
      { path: 'banner', component: BannerComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: 'security', component: SecurityComponent },
      { path : '', redirectTo:'home', pathMatch : 'full'},
      { path: '**', redirectTo: 'blog' }
   ]
  }
];

@NgModule({
  declarations: [
    AdmindashboardComponent,
    BlogComponent, 
    ContactComponent, 
    HomeComponent, 
    SecurityComponent, BannerComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class AdminModule { }
