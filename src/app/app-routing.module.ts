import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MedicinesHomeComponent } from './component/medicines-home/medicines-home.component';
import { ProductByCategoriesComponent } from './component/product-by-categories/product-by-categories.component';

const routes: Routes = [{
  path:'home',component:HomeComponent
},{path:'medicine',component:MedicinesHomeComponent},
{path:"otccategories",component:ProductByCategoriesComponent},
{path:"",redirectTo:'/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
