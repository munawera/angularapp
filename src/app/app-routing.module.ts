import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewSelectedComponent } from "./review-selected/review-selected.component";
import { ReviewHomeComponent } from "./review-home/review-home.component";
import { NewUseCaseComponent } from './new-use-case/new-use-case.component';
import { UsecasedetailsComponent } from './usecasedetails/usecasedetails.component';

const routes: Routes = [
  { path: 'review-home', component: ReviewHomeComponent },
  { path: 'review-selected', component: ReviewSelectedComponent },
  { path: 'newusecase', component: NewUseCaseComponent },
  { path: 'usecasedetails', component: UsecasedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
