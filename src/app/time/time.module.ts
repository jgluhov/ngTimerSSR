import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimeRoutingModule } from './time-routing.module';

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule
  ]
})
export class TimeModule { }
