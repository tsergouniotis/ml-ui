import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { HistogramComponent } from './histogram/histogram.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    HistogramComponent,
    ScatterComponent
  ],
  declarations: [
    LineComponent,
    HistogramComponent,
    ScatterComponent
  ]
})
export class ChartsModule { }
