import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/model.interface';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: Cart[] = this.cartService.getCart();

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }

  deleteProduct(product: Cart) {
    let objectIndex = this.productsCart.findIndex((element: any) => element.name === product.name);

    if (this.productsCart[objectIndex].amount! > 1) {
      this.productsCart.filter((element: Cart) => element.name === product.name)
        .forEach((element: Cart) => element.amount = element.amount! - 1)
    } else {
      this.productsCart.splice(objectIndex, 1);
    }
    this.cartService.updateCart(this.productsCart);
  }
}
