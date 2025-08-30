import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"addquestion",component:AddQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
