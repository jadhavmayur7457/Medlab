import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { MedicinesHomeComponent } from './component/medicines-home/medicines-home.component';
import { TopDealComponent } from './component/top-deal/top-deal.component';
import{HttpClientModule}from '@angular/common/http'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductByCategoriesComponent } from './component/product-by-categories/product-by-categories.component';
import { GitComponent } from './component/git/git.component';
import { MayurComponent } from './mayur/mayur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   MedicinesHomeComponent,
   TopDealComponent,
   ProductByCategoriesComponent,
   GitComponent,
   MayurComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    CarouselModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
