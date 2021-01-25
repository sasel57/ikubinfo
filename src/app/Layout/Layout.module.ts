import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Layout.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { MenuComponent } from './Menu/Menu.component';
import { FullLayoutComponent } from './FullLayout/FullLayout.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
     ],
  declarations: [LayoutComponent, FooterComponent, FullLayoutComponent, MenuComponent, PageNotFoundComponent]
})
export class LayoutModule { }
