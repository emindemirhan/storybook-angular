import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductTableComponent } from './product-table/product-table.component';
import { ButtonComponent } from './button/button.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { CategoryButtonComponent } from './category-button/category-button.component';

@NgModule({
  declarations: [AppComponent, ProductTableComponent, ButtonComponent, ApplyButtonComponent, CategoryButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
