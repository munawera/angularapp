import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewSelectedComponent } from "./review-selected/review-selected.component";
import { ReviewHomeComponent } from "./review-home/review-home.component";
import { NewUseCaseComponent } from './new-use-case/new-use-case.component';
import { UsecasedetailsComponent } from './usecasedetails/usecasedetails.component';
import { EnterpriseLibraryComponent } from "./enterprise-library/enterprise-library.component";

const routes: Routes = [
  { path: 'review-home', component: ReviewHomeComponent },
  { path: 'review-selected', component: ReviewSelectedComponent },
  { path: 'new-use-case', component: NewUseCaseComponent },
  { path: 'use-case-details', component: UsecasedetailsComponent },
  { path: 'enterprise-library', component: EnterpriseLibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
