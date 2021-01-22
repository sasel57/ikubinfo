import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './Tasks.component';
import { TaskModalComponent } from './TaskModal/TaskModal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    TasksComponent,
    TaskModalComponent
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
