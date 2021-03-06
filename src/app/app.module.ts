import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SharedModule } from './Shared/Shared.module';
import { LayoutModule } from './Layout/Layout.module';
import { TasksModule } from './Tasks/Tasks.module';
import { CoreModule } from './Core/Core.module';
import { CategoriesModule } from './Categories/Categories.module';
import { AccountModule } from './Account/Account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    TasksModule,
    CoreModule,
    CategoriesModule,
    AccountModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
