import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './Core.component';
import { AccountService } from './Account.service';
import { AuthGuard } from './auth.guard';
import { BaseHttpService } from './BaseHttp.service';
import { CategoryService } from './Category.service';
import { SpinnerOverlayService } from './SpinnerOverlay.service';
import { TaskService } from './Task.service';
import { ToastrService } from './Toastr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent, AccountService, AuthGuard, BaseHttpService, CategoryService,
    SpinnerOverlayService, TaskService, ToastrService
  ],
  declarations: [CoreComponent, AccountService, AuthGuard, BaseHttpService, CategoryService,
    SpinnerOverlayService, TaskService, ToastrService]
})
export class CoreModule { }
