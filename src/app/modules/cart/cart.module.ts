import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule {
  static forChild(): ModuleWithProviders<CartModule> {
    return {
      ngModule: CartModule,
      providers: [CartService]
    }
  }
}
