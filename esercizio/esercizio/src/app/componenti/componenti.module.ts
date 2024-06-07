import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentiRoutingModule } from './componenti-routing.module';
import { ComponentiComponent } from './componenti.component';


@NgModule({
  declarations: [
    ComponentiComponent
  ],
  imports: [
    CommonModule,
    ComponentiRoutingModule
  ]
})
export class ComponentiModule { }
