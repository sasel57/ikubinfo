import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './Categories.component';
import { CategoryModalComponent } from './CategoryModal/CategoryModal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CategoriesComponent,
    CategoryModalComponent
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
