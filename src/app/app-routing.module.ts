import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListServiceComponent} from "./list-service/list-service.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'navigator',
    component: ListServiceComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
