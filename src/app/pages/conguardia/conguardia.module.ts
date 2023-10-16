import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConguardiaPageRoutingModule } from './conguardia-routing.module';

import { ConguardiaPage } from './conguardia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConguardiaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ConguardiaPage]
})
export class ConguardiaPageModule {}
