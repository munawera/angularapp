import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewSelectedComponent } from "./review-selected/review-selected.component";
import { ReviewHomeComponent } from "./review-home/review-home.component";
import { NewUseCaseComponent } from './new-use-case/new-use-case.component';
import { UseCaseDetailsComponent } from './use-case-details/use-case-details.component';
import { EnterpriseLibraryComponent } from "./enterprise-library/enterprise-library.component";
import { ToolsComponent } from "./tools/tools.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'review-home', component: ReviewHomeComponent },
  { path: 'review-selected', component: ReviewSelectedComponent },
  { path: 'new-use-case', component: NewUseCaseComponent },
  { path: 'use-case-details', component: UseCaseDetailsComponent },
  { path: 'enterprise-library', component: EnterpriseLibraryComponent },
  { path: 'tools', component: ToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
