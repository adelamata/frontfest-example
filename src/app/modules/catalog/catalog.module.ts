import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogoRoutingModule } from './catalog-routing.module';
import { CatalogService } from './services/catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components/card/card.component';
import { CartService } from '../cart/services/cart.service';



@NgModule({
  declarations: [
    CatalogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    HttpClientModule
  ],
  providers: [CatalogService, CartService]
})
export class CatalogModule { }
