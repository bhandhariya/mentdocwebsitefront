import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { Slider1Component } from './home/shared/slider1/slider1.component';
import { Feature1Component } from './home/shared/feature1/feature1.component';
import { WhychooseusComponent } from './home/shared/whychooseus/whychooseus.component';
import { Model1Component } from './home/shared/model1/model1.component';
import { TestomonialComponent } from './home/shared/testomonial/testomonial.component';
import { CounterComponent } from './home/shared/counter/counter.component';
import { GallaryComponent } from './home/shared/gallary/gallary.component';
import { SecurityComponent } from './security/security.component';
import { SHeaderComponent } from './security/shared/s-header/s-header.component';
import { SBannerComponent } from './security/shared/s-banner/s-banner.component';
import { SDataMixComponent } from './security/shared/s-data-mix/s-data-mix.component';
import { SDataSecureComponent } from './security/shared/s-data-secure/s-data-secure.component';
import { SFooterComponent } from './security/shared/s-footer/s-footer.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CourousalComponent } from './shared/courousal/courousal.component';


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from 'src/environments/environment.prod';
import { TestingComponent } from './testing/testing.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OwlModule } from 'ngx-owl-carousel';
import { FaqComponent } from './security/shared/faq/faq.component';
import { Header2Component } from './shared/header2/header2.component';


import { CountUpModule } from 'countup.js-angular2';
import { DownappComponent } from './downapp/downapp.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestimonialsService } from './testimonials.service';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutUsComponent } from './home/shared/about-us/about-us.component';
import {AboutComponent} from './about/about.component';
import { LoaderComponent } from './loader/loader.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BlogViewComponent } from './blog-view/blog-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Slider1Component,
    Feature1Component,
    WhychooseusComponent,
    Model1Component,
    TestomonialComponent,
    CounterComponent,
    GallaryComponent,
    SecurityComponent,
    SHeaderComponent,
    SBannerComponent,
    SDataMixComponent,
    SDataSecureComponent,
    SFooterComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    CourousalComponent,
    AdminComponent,
    TestingComponent,
    FaqComponent,
    Header2Component,
    DownappComponent,
    FooterComponent,
    PrivacyComponent,
    AboutUsComponent,
    AboutComponent,
    LoaderComponent,
    BlogViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,FormsModule,HttpClientModule,ReactiveFormsModule,  
    AngularFireModule.initializeApp(environment.firebase),AngularFireStorageModule,CKEditorModule,
    OwlModule,CountUpModule,
    NgxSpinnerModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }