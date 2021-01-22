import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { FindItemPipe } from './FindItem.pipe';
import { HighlightDirective } from './Highlight.directive';
import { ToastrComponent } from './Toastr/Toastr.component';
import { ModalComponent } from './Modal/Modal.component';
import { ListComponent } from './List/List.component';
import { ConfirmationComponent } from './Confirmation/Confirmation.component';
import { SpinnerComponent } from './Spinner/Spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [		SharedComponent,
      FindItemPipe,
      HighlightDirective,
      ToastrComponent,
      ModalComponent,
      ListComponent,
      ConfirmationComponent,
      SpinnerComponent

   ],
   exports : [
    ToastrComponent,
    ModalComponent,
    ListComponent,
    ConfirmationComponent,
    FindItemPipe,
    HighlightDirective
   ]
})
export class SharedModule { }
