import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { cart, product } from 'src/app/shared/interfaces/model.interface';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: product[] = [];

  constructor(public readonly catalogService: CatalogService, private readonly localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  addToCart(product: product) {
  }

}
