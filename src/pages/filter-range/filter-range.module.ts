import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterRangePage } from './filter-range';

@NgModule({
  declarations: [
    FilterRangePage,
  ],
  imports: [
    IonicPageModule.forChild(FilterRangePage),
  ],
})
export class FilterRangePageModule {}
