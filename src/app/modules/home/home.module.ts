import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { HeaderComponent } from '../../components/commons/header/header.component';
import { FooterComponent } from '../../components/commons/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, ProductDetailComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
  
})
export class HomeModule { }
