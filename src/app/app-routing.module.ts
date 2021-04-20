import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSignComponent } from './security/new-sign/new-sign.component';

const routes: Routes = [
  {
    path: 'sign',
    component: NewSignComponent, // this is the component with the <router-outlet> in the template
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
