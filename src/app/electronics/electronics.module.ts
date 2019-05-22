import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';

import { MaterialModule } from '../material.module';
import { ElectronicDetailComponent } from './electronic-list/electronic-detail/electronic-detail.component';


@NgModule({
  declarations: [ElectronicListComponent, ElectronicDetailComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    MaterialModule
  ]
})
export class ElectronicsModule { }
