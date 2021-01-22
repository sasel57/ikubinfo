import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './Account.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
