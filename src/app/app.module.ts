import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkBlockComponent } from './components/work-block/work-block.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    WorkBlockComponent,
    ReviewsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
