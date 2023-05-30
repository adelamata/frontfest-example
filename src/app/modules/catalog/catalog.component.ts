import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Product } from 'src/app/shared/interfaces/model.interface';
import { CatalogService } from './services/catalog.service';
import { CartService } from '../cart/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  products$ = this.catalogService.getProducts();

  constructor(
    public readonly catalogService: CatalogService,
    private readonly cartService: CartService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  addToCart(product: Product) {
    const { image, category, description, rating, ...productCart} = product;
    this.cartService.addProduct(productCart);
    this.router.navigate(['cart']);
  }
}
