import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentiComponent } from './componenti.component';

const routes: Routes = [{ path: '', component: ComponentiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentiRoutingModule { }
