import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoclubPageRoutingModule } from './videoclub-routing.module';

import { VideoclubPage } from './videoclub.page';
import { DetallePage } from '../detalle/detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoclubPageRoutingModule
  ],
  declarations: [VideoclubPage, DetallePage],
  entryComponents: [DetallePage]
})
export class VideoclubPageModule {}
