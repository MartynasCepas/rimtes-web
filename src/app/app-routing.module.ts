import { ReviewsComponent } from './components/reviews/reviews.component';
import { WorkBlockComponent } from './components/work-block/work-block.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'apie-mane', component: AboutMeComponent },
  { path: 'kainos', component: WorkBlockComponent },
  { path: 'atsiliepimai', component: ReviewsComponent },
  { path: 'kontaktai', component: ContactFormComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
