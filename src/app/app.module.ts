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
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { PaymentstatusComponent } from './paymentstatus/paymentstatus.component';
// const router: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'aboutus', component: AboutusComponent },
//   { path: 'blog', component: BlogComponent }
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BlogComponent,
    BlogreadComponent,
    FooterComponent,
    QuestionComponent,
    PaymentstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'blogread', component: BlogreadComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'blog', component: BlogComponent },
      { path: '', component: HomeComponent },
      { path: ':askquestion', component: HomeComponent },
      // { path: 'blog/:queid', component: HomeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// { path: '**', component: HomeComponent,pathMatch: 'full' }