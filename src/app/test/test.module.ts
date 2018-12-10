import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestListComponent } from './test-list.component';

@NgModule({
  declarations: [TestListComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
