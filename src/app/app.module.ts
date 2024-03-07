import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductTableComponent } from './product-table/product-table.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, ProductTableComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
