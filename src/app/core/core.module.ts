import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './nav/nav-bar.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    NavBarComponent
  ],
  providers: []
})
export class CoreModule { }
