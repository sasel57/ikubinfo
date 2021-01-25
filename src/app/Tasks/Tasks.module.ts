import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './Tasks.component';
import { TaskModalComponent } from './TaskModal/TaskModal.component';
import { SharedModule } from '../Shared/Shared.module';
import { TaskComponent } from './Task/Task.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskComponent,
    TaskModalComponent
  ],
  declarations: [TasksComponent, TaskComponent, TaskModalComponent]
})
export class TasksModule { }
