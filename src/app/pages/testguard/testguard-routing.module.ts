import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestguardPage } from './testguard.page';

const routes: Routes = [
  {
    path: '',
    component: TestguardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestguardPageRoutingModule {}
