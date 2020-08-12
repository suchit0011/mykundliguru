import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogreadComponent } from './blogread/blogread.component';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { PaymentstatusComponent } from './paymentstatus/paymentstatus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SupportComponent } from './support/support.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HoroscopeComponent } from './horoscope/horoscope.component';
// const router: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'aboutus', component: AboutusComponent },
//   { path: 'blog', component: BlogComponent }
// ]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BlogComponent,
    BlogreadComponent,
    FooterComponent,
    QuestionComponent,
    PaymentstatusComponent,
    PrivacyComponent,
    SupportComponent,
    HoroscopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'privacy', component: PrivacyComponent },
      { path: 'blogread', component: BlogreadComponent },
      { path: 'blog', component: BlogComponent },
      // { path: '', component: HomeComponent },
      // { path: ':askquestion', component: HomeComponent },
    ],{ anchorScrolling: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// { path: '**', component: HomeComponent,pathMatch: 'full' }