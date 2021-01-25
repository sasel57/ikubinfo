import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './Categories.component';
import { CategoryModalComponent } from './CategoryModal/CategoryModal.component';
import { SharedModule } from '../Shared/Shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ],
  declarations: [CategoriesComponent, CategoryModalComponent]
})
export class CategoriesModule { }
