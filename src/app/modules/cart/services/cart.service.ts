import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/model.interface';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';

@Injectable()
export class CartService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  addToCart(product: Cart) {
    let cartList = [];
    if (JSON.parse(this.localStorageService.get({ key: 'cart' })!)) {
      cartList = JSON.parse(this.localStorageService.get({ key: 'cart' })!)
      if (cartList.filter((element: Cart) => element.name === product.name).length > 0) {
        cartList.filter((element: Cart) => element.name === product.name)
          .forEach((element: Cart) => element.amount = element.amount! + 1)
      } else {
        cartList.push({ ...product, amount: 1 })
      }
      this.localStorageService.add({ key: 'cart', value: JSON.stringify(cartList) });
    } else {
      this.localStorageService.add({ key: 'cart', value: JSON.stringify([{ ...product, amount: 1 }]) });
    }
  }

  getCart() {
    return JSON.parse(this.localStorageService.get({ key: 'cart' })!)
  }

  updateCart(productList: Cart[]) {
    this.localStorageService.add({ key: 'cart', value: JSON.stringify(productList) })
  }
}
