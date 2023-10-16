import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestguardPageRoutingModule } from './testguard-routing.module';

import { TestguardPage } from './testguard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestguardPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TestguardPage]
})
export class TestguardPageModule {}
