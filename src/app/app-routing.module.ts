import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataListComponent } from './components/data-list/data-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/data",
    pathMatch: "full"
  },
  {
    path:"data",
    component: DataListComponent
  },
  {
    path: "data/add",
    component: DataFormComponent
  },
  {
    path: "data/edit/:id",
    component: DataFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
