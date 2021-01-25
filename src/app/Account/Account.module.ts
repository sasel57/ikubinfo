import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './Account.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { SharedModule } from '../Shared/Shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [AccountComponent, RegisterComponent, LoginComponent]
})
export class AccountModule { }
