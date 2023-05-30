import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Cart, Product } from 'src/app/shared/interfaces/model.interface';
import { CatalogService } from './services/catalog.service';

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
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  addToCart(product: Product) {}
}
