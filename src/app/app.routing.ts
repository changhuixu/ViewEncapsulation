import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'emulated',
    pathMatch: 'full'
  },
  {
    path: 'emulated',
    component: Parent1Component
  },
  {
    path: 'native',
    component: Parent2Component
  },
  {
    path: 'none',
    component: Parent3Component
  },
  {
    path: '**',
    redirectTo: 'emulated'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
